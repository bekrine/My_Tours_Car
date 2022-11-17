import Navbar from "./view/Navbar";
import { Outlet } from "react-router-dom";
import {useGetCarsQuery} from "./services/car"



function App() {
  // const {isError,isLoading,data,error}=useGetCarsQuery()


  return (  
    <>
    <Navbar/>
  <Outlet/>
    </>
  );
}

export default App;
