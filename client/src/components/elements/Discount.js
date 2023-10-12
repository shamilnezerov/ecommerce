import React, { useEffect, useState } from "react";
import client from "../../api/api";



function Discount() {
  const [data, setData]=useState ({})

  useEffect(()=>{
    getdata()
 
   }, []);
   const getdata = async()=>{
     await client.get('discountnews').then((res)=>{
       if(res.data.length){
         setData(res.data[0])
       }
     })
   }
 
  return (
    <div className="p-2 discount mt-4 d-flex justify-content-center align-content-center">
      <span  className="dicount_text pt-3 ">
      <div dangerouslySetInnerHTML={{ __html: data.discountnews}} />
      </span>
    </div>
  );
}

export default Discount;
