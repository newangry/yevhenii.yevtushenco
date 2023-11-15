import { React, useState } from "react";
import "./Content.scss";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook, BiPaint } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs"

const Content = ({setSelColor}) => {
  const [activeNav, setActiveNav] = useState("#");
  const [showPaint, setShowPaint] = useState(false);
  
  return (
    <div className="nav bg-[rgba(0,0,0,0.3)]" >
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsPersonWorkspace />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdMessage />
      </a>
      <a
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          
          setShowPaint(p => !p)
        }}
      >
        <BiPaint cursor={"pointer"} />
        {
          showPaint ?
            <div className={`absolute top-[-40px]  left-[250px]`} 
            >
              <div className={`rounded-[10px] p-[10px] bg-[rgba(0,0,0,0.7)] w-[140px] flex gap-[15px] `}>
                <div className="w-[20px] h-[20px] bg-[black] rounded-full  border-[1px] cursor-pointer" onClick={() => {setSelColor('black')}}>
                </div>
                <div className="w-[20px] h-[20px] bg-[#1d6d86] rounded-full border-[1px] cursor-pointer" onClick={() => {setSelColor('green')}}>
                </div>
                <div className="w-[20px] h-[20px] bg-[#5dca36] rounded-full border-[1px] cursor-pointer" onClick={() => {setSelColor('blue')}}>
                </div>
                <div className="w-[20px] h-[20px] bg-[#af8536] rounded-full border-[1px] cursor-pointer" onClick={() => {setSelColor('yellow')}}>
                </div>
              </div>
            </div> : <></>
        }

      </a>
    </div>
  );
};

export default Content