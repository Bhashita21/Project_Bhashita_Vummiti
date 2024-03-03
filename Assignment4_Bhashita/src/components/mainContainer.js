import React from 'react'
import cardImage from '../utils/images/card.jpeg'
import buttons from '../utils/images/buttons1.png'




const videoCard = () => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4">
          {/* Video Thumbnail */}
          <img
            className="w-full h-40 object-cover object-center"
            src={cardImage} /* Replace with your image URL */
            alt="Video Thumbnail"
          />
         
          {/* Video Information */}
          <div className="px-4 py-2 ">
            <div className="font-bold text-xl mb-2 text-white"><img src={buttons}/></div>
            <div className='flex'>
            <p className=" mr-2 text-green-500">97% Match</p>
            <p className="text-gray-300 text-base">2h 35m</p>
            </div>
            <div>
            <ol className='flex'>
                <li className="text-gray-300 text-base mr-2">Horror</li>
                <li className="text-gray-300 text-base mr-2">Adventure</li>
                <li className="text-gray-300 text-base">Mystery</li>
            </ol>
            </div>
          </div>
   
       
        </div>
      );
    };
export default videoCard