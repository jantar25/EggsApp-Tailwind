import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router"


const ImageDetail = () => {
    const location=useLocation();
    const id= location.pathname.split("/")[2]
    const [imageDet,setImageDet] =useState({})

    
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${''}&id=${id}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data =>{
            setImageDet(data.hits[0])
        })
        .catch(err =>console.log(err))
    },[id])

    return (
        <div className='container mx-auto'>
            <img src={imageDet.webformatURL} alt="" className="w-full" />
            <h1>{imageDet.user}</h1>
        </div>
    )
}

export default ImageDetail
