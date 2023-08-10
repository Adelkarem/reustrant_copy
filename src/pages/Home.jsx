import { useState } from "react";
import Card from "./Card"; // Make sure to adjust the path according to your project structure
import 'animate.css';
import dislike from '../assets/images/dislike.png';
import like from '../assets/images/like.png';


function Home() {


    
  const cardData = [
    {
      id: 0,
      image: "/src/assets/images/dish1.png",
      title: "4.5",
      description: "Chef ADEL",
      pargr: "Designer takes on a chef, after marrying a long-awaited South Mountain girl.",
      icon: {like},
      icon1: {dislike},
    },
    {
      id: 1,
      image: "/src/assets/images/dish2.png",
      title: "4.6",
      description: "Chef SELIM",
      pargr: "You are always the most beautiful, especially your cooking, ahayy eventhe red rag.",
      icon: {like},
      icon1: {dislike},
    },
    {
      id: 2,
      image: "/src/assets/images/dish3.png",
      title: "4.9",
      description: "Chef NAGY",
      pargr: "How come my supervising lecturer is sour, yo rek, mosok ket wingi rateko teko, on the",
      icon: {like},
      icon1: {dislike},
    },
    {
      id: 3,
      image: "/src/assets/images/dish4.png",
      title: "4.8",
      description: "Chef LAILA",
      pargr: "With the neng mabar yuk finally Adin succeeded in becoming the boss of Mas",
      icon: {like},
      icon1: {dislike},
    },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleCardClick = (cardIndex) => {
    setSelectedCardIndex(cardIndex);
  };

  const handleNext = () => {
    const nextIndex = (selectedCardIndex + 1) % cardData.length;
    setSelectedCardIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (selectedCardIndex - 1 + cardData.length) % cardData.length;
    setSelectedCardIndex(prevIndex);
  };

  return (
    <section className="container mt-[50px] items-center">
      <div className="flex justify-between">

        
        {/* Main image */}
        <div className="main-image w-[250px] max-w-full animate__animated  animate__infinite
       animate__fadeInTopRight 
      ">
  <img
   
    src={cardData[selectedCardIndex].image}
    alt={`Dish ${cardData[selectedCardIndex].id}`}
  />
</div>



        {/* end_img */}
   <div className="midel-text flex flex-wrap">
  <div className="flex flex-col justify-center">
  <span className="text-sm lg:text-lg ">Most Loved dishes</span>
  <span className="text-[20px] lg:text-5xl font-thin font-sans uppercase">
   
      <span>toast</span>
     
   
  </span>
  <span className="text-[20px] lg:text-5xl font-black font-sans uppercase">
   
      <span className="">&amp; egg</span>
   
  
  </span>
  <div className="flex lg:mt-2 w-full">
    <span className="flex items-center mr-4 lg:mr-8">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 3L19 12L5 21V3Z" stroke="#3C3E4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      <p className="text-sm capitalize ml-1 whitespace-nowrap">Play video</p>
    </span>
    <span className="flex items-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95M15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="#3C3E4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      <p className="text-sm capitalize ml-1 whitespace-nowrap">Order food</p>
    </span>
  </div>
</div>
</div>
{/* start_right_div */}
        <div className="cards w-[260px] h-[271px] max-w-full bg-slate-200 rounded-[20px] cursor-pointer">
          <div className="container flex justify-between  pt-2">
            <h1 className="">Overview</h1>
            <h1>ingredients</h1>
          </div>
          <div className="pl-5 pt-2">
            <h1 className="bg-orange-300 w-9 rounded-[15px] h-11 font-bold text-white text-2xl pl-5">
              {cardData[selectedCardIndex].title}
            </h1>
            <h1 className="font-bold pt-1">{cardData[selectedCardIndex].description}</h1>
          </div>

          <div className="pt-2 pl-5">
            <p>{cardData[selectedCardIndex].pargr}</p>
          </div>

          <div className="flex pl-5 pt-2 gap-3">
            <img src={dislike} alt="icon" />
            <img src={like} alt="icon" />
          </div>
        </div>
      </div>

      {/* part-two */}
      <div className="container flex mt-[100px] gap-[20px] w-[920px] max-w-full">
        {cardData.map((card, index) => (
          <Card
            key={card.id}
            data={card}
            onClick={() => handleCardClick(index)}
            isSelected={selectedCardIndex === index}
          />
        ))}
      </div>

      {/* part-three */}
      <div className="container flex justify-between w-[700px] ml-[20px] max-w-full ">
        <button className="font-[800] w-[50px] h-[50px] rounded-[50px] bg-cyan-500 text-white" onClick={handlePrevious}>
          {"<"}
        </button>
        <button className="font-[800] w-[50px] h-[50px] rounded-[50px] bg-cyan-500 text-white" onClick={handleNext}>
          {">"}
        </button>
      </div>
      
   




 


    </section>
  );
}

export default Home;







