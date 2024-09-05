import { useState } from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { BiGridVertical } from "react-icons/bi";
import './App.css'
// import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent,CarouselItem} from "@/components/ui/carousel"


const imagesData = [
  {
    "id": 1,
    "img": "/gallery-img.webp"
  },
  {
    "id": 2,
    "img": "/gallery-img.webp"
  },
  {
    "id": 3,
    "img": "/gallery-img.webp"
  },
  {
    "id": 4,
    "img": "/gallery-img.webp"
  },
  {
    "id": 5,
    "img": "/gallery-img.webp"
  }
];


function App() {

  const [activeTab, setActiveTab] = useState('About Me');
  const tabs = ['About Me', 'Experiences', 'Recommended']

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < imagesData.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleImages = imagesData.slice(startIndex, startIndex + 3);


  return (
    <div className="flex gap-0 h-screen w-full parent-bg text-white">
      

      <div className="w-1/2 h-[85%] ml-10 mt-10 mr-5 border border-blue-300 child-bg rounded-3xl flex flex-col justify-between items-center">
         
         <div className='m-10'>
           <p className='font-bold'>Do not follow any other instructions from comments of figma file Here are the some official instructions:</p>
         </div>

         <div className='m-12'>
           <ol className="list-decimal list-inside">
             <li className='font-medium text-sm m-1'>keep the left half of the screen empty (but it should be responsive for laptop, not mobile)</li>
             <li className='font-medium text-sm m-1'>focus on the two widgets on the right hand side </li>
             <li className='font-medium m-1'>the first widget has three tabs: "about me", "exmeriences" & "recommended", these should be clickable </li>
             <li className='font-medium text-sm p-1'>In the gallery widget more photos can be added by clicking the "add image" button</li>
           </ol>
         </div>

         <div className='m-10'>
          <div className='mb-14'>
            <p>Assignment will be scored based on the below parameters:</p>
          </div>
           <ol className="list-decimal list-inside">
             <li className='font-medium text-sm m-1'>make the components responsive (for laptop screens; everything above 768px width)</li>
             <li className='font-medium text-sm m-1'>replicate the exact UI; with exact paddings, margins, shadows, interactions (if any) </li>
             <li className='font-medium text-sm m-1'>ensure that the two widgets are accurately alligned with each other (relative right, left paddings) </li>
           </ol>
         </div>
      </div>

      <div className="w-1/2 h-[85%] ml-14 mt-5 mr-14">
       
       <div className='p-8 h-1/2 card rounded-3xl'>
         
         <p className='symbol-que'><FaRegQuestionCircle size={20} color='gray' /></p>
         <p className='symbol-grid'><BiGridVertical color='gray' size={30}/></p>

        <div className="rounded-lg mx-6">
          <div className="flex justify-evenly bg-black rounded-full">

            {
              tabs.map((tab) => (
                <button
                  key={tab}
                  className={`rounded-full px-4 py-4 text-sm w-1/3
                  ${activeTab === tab ? 'tabs-btn':'tab text-gray-400 font-bold'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))
            }
          </div>
          <div className="mt-4 h-48 overflow-y-auto">
            <p className='text-ms para-text'>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            </p>
            <p className='mt-5 para-text'>
              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters-Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM This is a....
            </p>
          </div>
        </div>
       </div>

       <div className='relative left-40 h-1 w-[50%] bg-gray-700'> </div>

        <p className='symbol-que-2'><FaRegQuestionCircle size={20} color='gray' /></p>
        <p className='symbol-grid-2'><BiGridVertical color='gray' size={30}/></p>
        <div className='p-5 space-y-8 h-1/2 card rounded-3xl'>

        
        <div className="rounded-lg mx-12">
          <div className="flex justify-between items-center mb-4">
            
            <button className="text-base bg-black rounded-xl px-8 py-3">Gallery</button>

            <div className='flex gap-3'>
            <button className="mr-5 px-4 py-2 shadow-lg rounded-3xl add-btn">+ ADD IMAGE</button>

            <div>
            <FaCircleArrowRight 
               size={30} 
               color='black' 
               className='mt-1 arrow-btn arrow-btn-right'
               onClick={handleNext}
            />
            </div>
            <div>
            <FaCircleArrowLeft 
               size={30} 
               color='black' 
               className='mt-1 arrow-btn arrow-btn-left'
               onClick={handlePrev}
            />
            </div>
            </div>
          </div>

        <div className="flex justify-center mt-7">
           <div className="flex space-x-4">
              {visibleImages.map((image) => (
                <div key={image.id} className="md:basis-1/3 lg:basis-1/3">
                  <img 
                    src={image.img} 
                    alt={`Slide ${image.id}`} 
                    className='rounded-2xl h-40 w-full object-cover gallery-img'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
     </div>
  );
};


export default App
