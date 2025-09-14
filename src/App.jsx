

// import './index.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from './Homepage';
// import Getstarted from './GetStarted';
// import Header from './components/Header';
// // import Footer from './components/Footer';
// import MoreInfo from './MoreInfo';  // import your new page

// function App() {
//   return (
//     <Router>
//       <Header /> 
//       <Routes>
//         {/* Route for homepage */}
//         <Route path="/" element={<Homepage />} />
        

//         <Route path="/Getstarted" element={<Getstarted />} />
//         {/* Route for MoreInfo page */}
//         <Route path="/moreinfo" element={<MoreInfo />} />
//       </Routes>
//       {/* <Footer/> */}
//     </Router>
//   );
// }

// export default App;



import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from './Homepage';
import Getstarted from './GetStarted';
import Header from './components/Header';
// import Footer from './components/Footer';
import MoreInfo from './MoreInfo';  // import your new page

function AppLayout() {
  const location = useLocation();

  // Hide Header when path is "/Getstarted"
  const hideHeader = location.pathname.toLowerCase() === "/getstarted";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

