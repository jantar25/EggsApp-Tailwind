import React,{useState,useEffect} from 'react'
import Card from './Card'
import Footer from './Footer'
import Search from './search'

const Navbar = () => {
    const [images,setImages] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [term,setTerm] = useState("")

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data =>{
                setImages(data.hits)
                setIsLoading(false)
            })
            .catch(err =>console.log(err))
    }, [term])

    return (
        <div className='mx-auto'>
            <Search searchText={(text)=>setTerm(text)} />
            <div className='container mx-auto'>
                {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto
                 text-teal-600 mt-32">No Images Found</h1>}

                {isLoading? <h1 className="text-6xl text-center mx-auto text-teal-600 mt-32">LOADING ...</h1> 
                : <div className='flex flex-col sm:flex-row flex-wrap gap-4 justify-center'>
                    {images.map(image =>(
                        <Card key={image.id} image={image} />
                    ))}
                </div>}
            </div>
            <Footer />
        </div>
    )
}

export default Navbar
