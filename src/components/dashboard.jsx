import LiquidEther from './../LiquidEther';
import RotatingText from './../RotatingText'

function dashboard() {
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


        <div className="absolute inset-0 flex items-center justify-center space-x-4">
          {/* Left Plain Text */}
          <span className="text-4xl font-bold font-poppins text-white">
            Creative
          </span>

          {/* Right Rotating Box */}
          <RotatingText
            texts={['hii', 'this', 'is', 'sujayy!']}
            mainClassName="inline-flex items-center justify-center bg-purple-600 text-white rounded-lg text-4xl font-bold font-poppins px-6 py-3"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
    </>
  )
}

export default dashboard;
