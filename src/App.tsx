import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";

const App : React.FC = () => {

  return (
    <BrowserRouter>
     <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
         <Routes>
             <Route path={'/'} element={<Auth />} />
             <Route path={'/dashboard'} element={<Home />} />
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
