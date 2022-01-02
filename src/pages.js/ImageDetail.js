import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router"

const ImageDetail = () => {
    const location=useLocation();
    const id= location.pathname.split("/")[2]
    const [imageDet,setImageDet] =useState({})
    
    useEffect(()=>{
        const getProduct=()=>{
            // try {
            //     const res = publicRequest.get("/image/find/" +id)
            //     setImageDet(res.data);               
            // } catch (error) {
            //     console.log(error)
            // }
        }
        getProduct();
    },[id])

    return (
        <div>
            Hello {id} 
        </div>
    )
}

export default ImageDetail
