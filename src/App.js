import "./App.scss";
import NavBar from "./components/NavBar";
import VideoDisplay from "./components/VideoDisplay";
import VideoData from "./components/VideoData";
import VideoQueue from "./components/VideoQueue";

import logo from "./assets/logo/BrainFlix-logo.svg";
import icon from "./assets/images/Mohan-muruge.jpg";

function App() {
  return (
    <>
      {/* NAV BAR COMPONENT */}
      <NavBar logo={logo} src={icon} />
      {/* VIDEO DISPLAY COMPONENT */}
      <VideoDisplay />
      {/* VIDEO DATA COMPONENT */}
      <VideoData />
      {/* VIDEO QUEUE COMPONENT */}
      <VideoQueue />
    </>
  );
}

export default App;
