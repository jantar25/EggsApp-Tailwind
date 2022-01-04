import React,{useState} from 'react'


const Search = ({searchText}) => {
    const [text,setText] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        searchText(text);
    }
    return (
        <div className="h-96 flex justify-center items-center flex-col px-5 sm:p-10">
            <h1 className='font-bold text-teal-500 text-6xl font-serif w-fit p-2'>Gallery</h1>
            <h2 className='text-md sm:text-xl md:text-4xl text-white font-light my-5'>
                Stunning free images and royalty free stock
            </h2>
            <h3 className='text-sm sm:text-md text-gray-500 mb-5 text-center'>
                Over millions high quality stock images shared by our talented community.
            </h3>
            <form onSubmit={onSubmit} className='w-full max-w-sm'>
                <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
                    <input onChange={e=>setText(e.target.value)} className='appearance-none bg-transparent border-none 
                    w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
                    type='text' placeholder="Search Image..." />
                    <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
                    text-sm border-4 text-white py-1 px-2 rounded' type='submit'> Search</button>
                </div>
            </form>            
        </div>
    )
}

export default Search
