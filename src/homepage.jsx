import LiquidEther from "./LiquidEther";
import RotatingText from './RotatingText'
import { ArrowRight } from "lucide-react";

function Homepage() {
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


    

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 -mt-20">
          {/* Text */}
          <span className="text-4xl font-bold font-poppins text-white">
            From text to math animations,
            <span className="block text-center">effortlessly</span>
          </span>

          {/* Buttons */}
          <div className="flex space-x-6">
            {/* Button 1 */}
            {/* <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button> */}

            <a
              href="/GetStarted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>

            {/* Button 2 → Opens MoreInfo in new tab */}
            <a
              href="/moreinfo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-3 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition inline-flex items-center justify-center"
            >
              More Info
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Homepage;