import  Provider  from "./components/MyContext";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from "./components/HomePage";
import HomePage2 from "./components/HomePage2";
const App = () => {
  return (
    <>

<h1>Kelompok 34 RPLBK</h1>
      
        
     

      <BrowserRouter>
      <Provider>
        <Routes>
          <Route path='/' exact element={<HomePage/>}></Route>
          <Route path='/Homepage2' exact element={<HomePage2 />}></Route>
        </Routes>
        </Provider>
      </BrowserRouter>


    
    </>
  );
};

export default App;
