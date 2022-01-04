import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"

const Card = ({image}) => {
    const [modal,setModal] = useState(false);
    const tags = image.tags.split(",")

    const toggleModal = () =>{
        setModal(!modal)
    } 
    
    return (
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img onClick={toggleModal} src={image.webformatURL} alt="" className="w-full" /> 
            <div className="px-6 py-4">
                <div className="font-bold text-purple-400 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li><span className="text-teal-400">Views: </span>{image.views}</li>
                    <li><span className="text-teal-400">Downloadss: </span>{image.downloads}</li>
                    <li><span className="text-teal-400">Likes: </span>{image.likes}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag,index)=>(
                    <span key={index}  className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm
                    font-semibold text-teal-700 mr-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
        {modal && 
        <div className='h-screen w-screen fixed bottom-0 left-0 right-0 top-0'>
            <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-zinc-700/[0.8]'></div>
            <div className='absolute top-10 left-1/4 bg-slate-50 max-w-xl max-h-fit py-10 px-20 container m-5'>              
                <div>
                    <img src={image.webformatURL} alt="" className="w-full" />
                </div>
                <div className="m-10">
                    <h1>{image.user}</h1>
                    <p>lorrem</p>
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Card
