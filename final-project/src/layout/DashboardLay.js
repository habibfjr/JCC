import React from "react";
import Foot from "../components/Foot";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const DashboardLayout = (props) => {
    return(
        <>
        <main className="bg-gray-100 rounded-2xl overflow-hidden relative">
                
                <div className="flex items-start justify-between">
                <Sidebar />
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <Header />
                    {props.children}
        </div>
                </div>
        </main>

        <Foot/>
        </>


    )
}

export default DashboardLayout