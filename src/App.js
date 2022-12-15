import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {

  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=> {
      setAlert({
        msg: message,
        type:type
      })
  }
  
  
    const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success");
      setInterval(()=>{
        document.title = "textUtile is amazing mode";

      }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode ahs been enabled", "success")
      document.title = "textUtile = light mode"
    }
    
  }

  const toggleMode1 = ()=>{
    if (mode === 'light'){
      setMode('green');
      document.body.style.backgroundColor = "red"
      showAlert("green mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode ahs been enabled", "success")

    }
    
  }

 

  return (
    <>
    <Router>
      {/* <Navbar title="Texttutils" aboutText="About Texttutils" /> */}
      <Navbar title="Texttutils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
      <Alert alert= {alert}/>
      <div className="conatiner my-3">
        

        <Routes>
          <Route exact path="/About" element={<About/>}/>
            
        
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
                     

          
        </Routes>
        
          
        

        {/* <About/> */}
       

       
      </div>
      </Router>
    </>
  );
}

export default App;