import React from 'react';
import { useState, useEffect } from 'react';
import './cardBlock.css';

const CardBlock = () => {
  const [data, setData] = useState([]);

  const billData = async () => {
    try {
      const res = await fetch("/bills", { 
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const bill = await res.json();
      
      setData(bill);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log("Error fetching card data: " + error);
    }
  };

  useEffect(() => {
    billData();
  }, []);

  return (
    <div className='cardBlock__body'>
      {data.map((ele, index) => { 
        return(
        <div className='cards__box' key={index}>
          <div><h1>Month: {ele.month}</h1></div>
          <div><h2>Bill Amount: {ele.amount} Rupees</h2></div>
          <div><h3>Payment Status: {ele.payStatus}</h3></div>
          <div><h3>Mode of Payment: {ele.modeOfPayment}</h3></div>
        </div>) 
      })}
    </div>
  )
}

export default CardBlock