import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
    </Router>
    </>
  )
 
}

export default App;
