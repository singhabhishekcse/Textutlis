import React , {useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/about.js';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Blog from './Components/Blog';
import Footer from './Components/Footer';


function App() {

   const [mode, setMode] = useState("light")

   const [alert, setAlert] = useState(null)


   const showAlert =(msg,type)=>{
                      setAlert({
                                  meesage : msg,
                                  type: type
                              })
                        setTimeout(()=>{
                          setAlert(null)
                        },1500)
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
        <Router>
           <NavBar mode={mode} toggleMode = {toggleMode}  title="Textutlis" home="Home" blog="Blog" about="About"  login="Log In" logout="Log Out" />
             <Alert alert={alert} />
    
       <Switch>
          
          <Route exact path="/about">
            <About  mode={mode} />
          </Route>
          <Route exact path="/">
               <TextForm heading="Try Textutlis Counter" mode={mode}   showAlert= {showAlert} />
          </Route>
          <Route exact path="/blog">
            <Blog  mode={mode} />
          </Route>
        </Switch>
        <Footer />
       </Router>
       
    </>
  );
}

export default App;
