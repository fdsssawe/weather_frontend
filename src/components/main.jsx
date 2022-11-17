import React from 'react';
import FetchingHere from "./FetchingHere";
import  "../index.css"



const Main = () => {




    return (

            <div className=" bg-slate-900 flex  h-screen w-screen align-items-center flex-col ">
                <nav className=" border-solid border-sky-300 border-b-4 rounded  w-screen h-20 text-sky-300 text-center pt-5 text-2xl font-mono bg-slate-900">
                    Current weather in Lviv
                </nav>

                    <FetchingHere></FetchingHere>




            </div>

    );
};

export default Main;