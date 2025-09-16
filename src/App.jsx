



// import './index.css';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Homepage from './Homepage';
// import Getstarted from './GetStarted';
// import Header from './components/Header';
// // import Footer from './components/Footer';
// import MoreInfo from './MoreInfo';  // import your new page

// function AppLayout() {
//   const location = useLocation();

//   // Hide Header when path is "/Getstarted"
//   const hideHeader = location.pathname.toLowerCase() === "/getstarted";

//   return (
//     <>
//       {!hideHeader && <Header />}
//       <Routes>
//         {/* Route for homepage */}
//         <Route path="/" element={<Homepage />} />
//         <Route path="/getstarted" element={<Getstarted />} />
//         <Route path="/moreinfo" element={<MoreInfo />} />
//       </Routes>
//       {/* <Footer/> */}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// }





// import './index.css';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// import Homepage from './Homepage';
// import Getstarted from './GetStarted';
// import Header from './components/Header';
// // import Footer from './components/Footer';
// import MoreInfo from './MoreInfo';  // import your new page

// function AppLayout() {
//   const location = useLocation();

//   // Hide Header when path is "/Getstarted"
//   const hideHeader = location.pathname.toLowerCase() === "/getstarted";

//   return (
//     <>
//       {!hideHeader && <Header />}

//       {/* AnimatePresence to handle transitions */}
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//                 className="w-full h-full"
//               >
//                 <Homepage />
//               </motion.div>
//             }
//           />
//           <Route
//             path="/getstarted"
//             element={
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//                 className="w-full h-full"
//               >
//                 <Getstarted />
//               </motion.div>
//             }
//           />
//           <Route
//             path="/moreinfo"
//             element={
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//                 className="w-full h-full"
//               >
//                 <MoreInfo />
//               </motion.div>
//             }
//           />
//         </Routes>
//       </AnimatePresence>

//       {/* <Footer/> */}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// }



import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom/client";


import Homepage from './Homepage';
import Getstarted from './GetStarted';
import Header from './components/Header';
import Chatbot from "./pages/Chatbot.jsx";
import MoreInfo from './MoreInfo';  // import your new page





// Reusable animation wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      {children}
    </motion.div>
  );
};



// function AppLayout() {
//   const location = useLocation();

//   // Hide Header when path is "/getstarted"
//   const hideHeader = location.pathname.toLowerCase() === "/getstarted";

//   return (
//     <>
//       {!hideHeader && <Header />}

//       <div className="w-screen h-screen bg-black relative overflow-hidden">
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
//             <Route path="/getstarted" element={<PageWrapper><Getstarted /></PageWrapper>} />
//             <Route path="/moreinfo" element={<PageWrapper><MoreInfo /></PageWrapper>} />
//           </Routes>
//         </AnimatePresence>
//       </div>

//     </>
//   );
// }

function AppLayout() {
  const location = useLocation();

  // Hide Header when path is "/getstarted"
  const hideHeader = location.pathname.toLowerCase() === "/getstarted";

  return (
    <>
      {!hideHeader && <Header />}

      <div className="w-screen h-screen bg-black relative overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
            <Route path="/getstarted" element={<PageWrapper><Getstarted /></PageWrapper>} />
            <Route path="/moreinfo" element={<PageWrapper><MoreInfo /></PageWrapper>} />

            {/* ✅ Add Chatbot route here */}
            <Route path="/chatbot" element={<PageWrapper><Chatbot /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}



export default function App() {
  return (
    <Router>
      <AppLayout />
      {/* <Chatbot/> */}
    </Router>
  );
}

