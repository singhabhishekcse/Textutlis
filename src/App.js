import React , {useState} from 'react';
// import About from './Components/about.js';
// import Card from './Components/card';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
   const [mode, setMode] = useState("light")
  
   const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }

  }
  
   

  return (
    <>
       <NavBar mode={mode} toggleMode = {toggleMode}  title="Textutlis" home="Home" blog="Blog" about="About"  login="Log In" logout="Log Out" />

       <TextForm heading="Enter Your Text Below" mode={mode} />

        {/* <Card />
       <About /> */}
        


    </>
  );
}

export default App;
