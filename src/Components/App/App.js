import './App.css';
import LeftSection from '../LeftSection/LeftSection'
import RightSection from '../RightSection/RightSection'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </div>
    </Router>
  );
}

export default App;
