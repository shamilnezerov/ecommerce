import React , {useEffect , useState} from "react";
import '../../assets/css/Home.scss'
import Image from '../../assets/img/image'


const Home = (props) => {

    return (
      <div className="full d-flex justify-content-center align-items-center h-100">
        <div className="p-5 bravo ">
        <img src={Image.shopping} alt="" className="text-center"/>
        </div>
      </div>
    );
};
export default Home;