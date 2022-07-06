import './App.css';
import {Route,Routes} from "react-router-dom"
import { Home } from './components/Home';
import JobDetails from './components/JobDetails';
function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
