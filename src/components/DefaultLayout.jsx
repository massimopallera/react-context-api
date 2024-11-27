import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

export default function DefaultLayout(){
   return(
    <div className="bg-black text-white">
       <Header />

         <main>
            <div className="container">
               <Outlet />
            </div>
         </main>

       <Footer />
    </div>
  )
}