import React, { useState, useEffect } from 'react';
import cardImage from '../utils/images/card.jpeg';
import playButton from '../utils/images/playbutton.png';
import likeButton from '../utils/images/likebutton.jpg';
import DislikeButton from '../utils/images/dislikebutton.jpg';
import moreinfoButton from '../utils/images/moreinfo.png';





const VideoCard = () => {
  const [likeCount, setLikeCount] = useState(0);


  // useEffect to monitor changes in likeCount
  useEffect(() => {
    // You can perform actions here when likeCount changes, if needed
    // console.log('Like count changed:', likeCount);
  }, [likeCount]);


  const handleLikeClick = () => {
    // Increment likeCount by 1 when the like button is clicked
    setLikeCount(likeCount + 1);
  };
  const Modal = ({ onClose }) => {
    return (
      <div className="modal fixed top-50 left-0 flex-start z-10">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" onClick={onClose}>
          &times;
        </div>
        <div className="modal-content py-4 text-left px-6">
          <p className="text-gray-800">Chandramukhi2 is a 2023 Indian Tamil-Language comedy horror film written and directed by P.Vasu</p>
        </div>
      </div>
      </div>
    
    );
  };
  
  // Parent component

    const [showModal, setShowModal] = useState(false);
  
    const toggleModal = () => {
      setShowModal(!showModal);
    }



  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4">
      {/* Video Thumbnail */}
      <img
        className="w-full h-40 object-cover object-center"
        src={cardImage}
        alt="Video Thumbnail"
      />
     
      {/* Video Information */}
      <div className="px-4 py-2">
        <div className='flex '>
          <div className="font-bold text-xl mb-2 text-white">
            <button><img className='w-12' src={playButton} alt="Play Button" /></button>
          </div>
          <button onClick={handleLikeClick}>
            <img className='w-7 mr-2 mb-4' src={likeButton} alt="Like Button" />
          </button>
          <button><img className='w-7 mb-4 mr-20' src={DislikeButton} alt="Dislike Button" /></button>
          <span> 
           <button onClick={toggleModal}><img className='w-7 mb-4 ' src={moreinfoButton} alt="moreinfo Button"  /></button>
            {showModal && <Modal onClose={toggleModal} />}
           </span>
        </div>
           
        <p className="text-gray-300">{likeCount} likes</p>
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
        {/* Display the like count */}
      </div>
    </div>
  );
};


export default VideoCard;