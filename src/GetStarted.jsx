import LiquidEther from "./LiquidEther";
import RotatingText from './RotatingText'
import { ArrowRight } from "lucide-react";

function Getstarted() {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }} className="bg-black">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />


        {/* <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 -mt-20">
   
          <span className="text-4xl font-bold font-poppins text-white">
            What should we build today?
            
          </span>
          <span className="text-sm text-gray-300 mt-2">
            Create stunning math animations by chatting with AI
          </span>


        </div> */}

        {/* <div className="absolute inset-0 flex flex-col items-center justify-center -mt-20">
          <span className="text-4xl font-bold font-poppins text-white text-center">
            What should we build today?
          </span>
          <span className="text-sm text-gray-300 mt-2 text-center">
            Create stunning math animations by chatting with AI
          </span>

          <p className="text-gray-300">
            Type your idea and we'll build it together.
          </p>
        </div> */}


        {/* <div className="absolute inset-0 flex flex-col items-center justify-center -mt-20 space-y-6">
          <span className="text-4xl font-bold font-poppins text-white text-center">
            What should we build today?
          </span>
          <span className="text-sm text-gray-300 mt-2 text-center">
            Create stunning math animations by chatting with AI
          </span>
          <textarea
            placeholder="Type your idea and we'll build it together."
            className="w-[400px] max-w-[90%] h-32 px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          ></textarea>

        </div> */}


        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-20 space-y-4">
          {/* Headings */}
          <span className="text-4xl font-bold font-poppins text-white text-center">
            What should we build today?
          </span>
          <span className="text-sm text-gray-300 text-center">
            Create stunning math animations by chatting with AI
          </span>

          {/* Transparent Input Box */}
          <textarea
            placeholder="Type your idea and we'll build it together."
            className="w-[400px] max-w-[90%] h-32 px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            style={{ fontSize: '0.875rem' }} // controls the font size
          ></textarea>

        </div>





      </div>
    </>
  )
}

export default Getstarted;