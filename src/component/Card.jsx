import React,{useState,useEffect} from 'react'
import { saveAs } from 'file-saver'

const Card = ({image}) => {
    const [modal,setModal] = useState(false);
    const tags = image.tags.split(",")

    const toggleModal = () =>{
        setModal(!modal)
    } 
    
    if(modal){
        document.body.classList.add('overflow-hidden')
    } else  {
        document.body.classList.remove('overflow-hidden')
    }

    const downloadImage = () => {
        saveAs(image.webformatURL)
    }

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img onClick={toggleModal} src={image.webformatURL} alt="" className="w-full" /> 
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-400 text-xl mb-2">
                        Photo by {image.user}
                    </div>
                    <ul>
                        <li><span className="text-teal-400">Views: </span>{image.views}</li>
                        <li><span className="text-teal-400">Downloads: </span>{image.downloads}</li>
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
            <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0'>
                <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.9]'></div>
                <div className='absolute top-2 left-0 right-0 w-full sm:w-2/3 md:w-1/2 bg-slate-50 max-h-full 
                container ml-auto mr-auto overflow-auto'>              
                    <div>
                        <img src={image.largeImageURL} alt="" className="w-full" />
                    </div>
                    <div className="ml-10 mb-5">
                        <div className="font-bold text-purple-700 text-xl mt-2">
                            Shooted by {image.user}
                        </div>
                        <div className="px-6 py-4">
                            {tags.map((tag,index)=>(
                                <span key={index}  className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm
                                font-semibold text-teal-700 mr-2">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                            <button className='flex items-center shrink-0 bg-green-500 hover:bg-green-700 border-green-500
                            text-sm border-4 text-white text-2xl py-1 px-3 rounded mt-2' onClick={downloadImage}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>Download</button>
                    </div>
                    <button className='absolute top-1 right-2 flex-shrink-0 hover:border-red-500
                    text-red-700 py-1 px-2' onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg></button>
                </div>
            </div>}
        </div>
    )
}

export default Card
