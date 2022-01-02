import React,{useState} from 'react'


const Search = ({searchText}) => {
    const [text,setText] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        searchText(text);
    }
    return (
        <div className='flex items-center justify-between h-20 rounded overflow-hidden py-10 
        px-5 sticky top-0 mb-10 shadow-md bg-slate-50'>
            <h1 className='font-bold border-solid border-4 text-teal-700 text-md md:text-3xl rounded-lg 
            font-serif border-teal-700 w-fit py-1 px-2 md:py-2 md:px-4'>Gallery</h1>
            <form onSubmit={onSubmit} className='w-1/2 md:w-full max-w-sm'>
                <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
                    <input onChange={e=>setText(e.target.value)} className='appearance-none bg-transparent border-none 
                    w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    type='text' placeholder="Search Image..." />
                    <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
                    text-sm border-4 text-white py-1 px-2 rounded' type='submit'> Search</button>
                </div>
            </form>            
        </div>
    )
}

export default Search
