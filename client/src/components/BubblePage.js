import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);



    useEffect( () => {

        axiosWithAuth()
      .get("/colors")
      .then(res => {
        setColorList(res.data);
        
      })
      .catch(err => {
        console.log("get error", err.response.data.error);
        
      });
    }, []);
    


 
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
  
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
