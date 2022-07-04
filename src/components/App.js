import React from "react";
import './App.css';
import { useEffect, useState } from 'react';

import TextField from "@mui/material/TextField";
import Data from "./Data";
import ReactPaginate from "react-paginate";

export default function App() {


  const [data, setData] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      
    };

    fetch('https://reqres.in/api/products', options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));

  }, [])

  console.log(data)

  
  const [inputID, setInputID] = useState("");
  const [currentPage, setCurrentPage] = useState(0)

  let handleInput = (e) => {

    let input_no = e.target.value
    setInputID(input_no);
  };

  const obj = data?.data
  const perPage = 5;

  const firstIndexOfPage = currentPage * perPage
  const currentData = obj?.slice(firstIndexOfPage, firstIndexOfPage + perPage)

  const amountOfPage = Math.ceil(obj?.length / perPage)



  const onChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <div className="App">
      <div className="main">
        <h1>Type ID</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"

            label="Search"
            onChange={handleInput}
            type="number"
          />
        </div>

      </div>

      <Data obj={currentData} inputID={inputID} />


      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={amountOfPage}
        onPageChange={onChange}
        containerClassName={"pagination"}

      />
    </div>
  );
}




