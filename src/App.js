import { useState } from 'react';
import './App.css';

const images = [
  "https://www.clqw.ca/wp-content/uploads/2020/12/Beautiful-lake-world-gallery-1920x1080-wallpapers.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QULUbO8jWbl7L-hn6PwEiT8Q-MqKgEEg13CQ1LFml853u0z01X2eFLU46-exPWhkYzQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc73lT-D8DTnqz1qi2Eg6l--irIdSQ-HhqhgkZ2mvPYFYI2QvLnvxVS-VcgD4KEBcnd7s&usqp=CAU",
  "https://images.unsplash.com/photo-1545897398-2aba891843b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80"
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="App">
      <h2>Image Gallery</h2>
      <div className='Slider'>
        <div className='left-arrow' onClick={prevSlide}>
          &#11013;
        </div>
        <div className='right-arrow' onClick={nextSlide}>
          &#10145;
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className='Slide'>
                <img src={image} alt='image' />
              </div>
            )
        )}
      </div>
    </div>
  );
}
