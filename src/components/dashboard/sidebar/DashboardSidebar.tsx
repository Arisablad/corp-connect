"use client"

import { ArrowRightCircle, } from "lucide-react";
import { useState } from "react"

const DashboardSidebar = () => {


    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <nav className="min-h-screen min-w-min">
            <ArrowRightCircle className="w-12 h-12 hover:text-gray-300 transition duration-300 cursor-pointer" onClick={() => { setShowSidebar(!showSidebar) }} />



            {showSidebar &&
                <div className="bg-[#303D50] w-96 min-h-screen">.</div>
            }


        </nav>
    )
}






export default DashboardSidebar