import React from 'react'

const Card = ({image}) => {
    const tags = image.tags.split(",")

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full" /> 
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
    )
}

export default Card
