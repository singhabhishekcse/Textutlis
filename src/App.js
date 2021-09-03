import React , {useState} from 'react';
import Alert from './Components/Alert';
// import About from './Components/about.js';
// import Card from './Components/card';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
   const [mode, setMode] = useState("light")
   const [alert, setAlert] = useState(null)


   const showAlert =(msg,type)=>{
                      setAlert({
                                  meesage : msg,
                                  type: type
                              })
                     }


  
   const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#000080"
      showAlert("Dark mode is enable","success :")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enable","success :")
    }

  }
  
  

 


  return (
    <>
       <NavBar mode={mode} toggleMode = {toggleMode}  title="Textutlis" home="Home" blog="Blog" about="About"  login="Log In" logout="Log Out" />

       <Alert alert={alert} />


       <TextForm heading="Enter Your Text Below" mode={mode} />

        {/* <Card />
       <About /> */}
        


    </>
  );
}

export default App;
