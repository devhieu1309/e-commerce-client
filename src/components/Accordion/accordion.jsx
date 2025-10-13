import React, { useState } from 'react';

const Accordion = ({ title, answer}) => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full text-left px-4 py-3 rounded font-bold text-[25px] transition-colors
          ${isOpen ? "bg-blue-900 text-white" : "bg-[#E3E3E3] text-black"}`}
      >
        <span className="font-semibold text-[25px]">
          {title}
        </span>
      </button>
      
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-[20px]
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden bg-white rounded-b-lg border border-t-1 border-gray-300 text-[22px]">
          <div className="px-4 py-3">
          {answer}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Accordion;





