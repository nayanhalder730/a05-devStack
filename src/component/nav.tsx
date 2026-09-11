import type { ITechnology } from "../type/type";
import logo from "../assets/logo-text.png";
import { useState } from "react";

export interface NavProps {
  technology: ITechnology;
}

export default function Nav({ technology }: NavProps) {
    const [sign,setSign]=useState(true)

    function handelSignButton(){
        setSign(!sign);
    }
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#fceaea]">
        <div className="container mx-auto flex items-center py-4">
          <div className="mr-auto">
            <img className="w-full" src={logo} alt="Logo" />
          </div>

          <ul className="text-[#767a80] list-none flex items-center gap-6 text-xl">
            <li className="text-red-400">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="ml-auto p-3 flex gap-2">
            <button onClick={handelSignButton} className={`btn ${sign === true ? "btn-secondary" : ""} rounded-3xl`}>Secondary</button>
            <button onClick={handelSignButton} className={`btn ${sign === false ? "btn-secondary" : ""} rounded-3xl`}>Secondary</button>
          </div>
        </div>
      </nav>
    </>
  );
}
