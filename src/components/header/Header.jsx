import React from "react";
import LOGOTYPE from "@/assets/header/LOGOTYPE – BILETICK.svg";
import Main from "@/assets/header/Main.svg";
import Tablet_line from "@/assets/header/tablet-line.svg";
import Vector from "@/assets/header/Vector.svg";
import Search from "@/assets/header/search-line.svg";

const Header = () => {
  return (
    <div className="flex container items-center justify-between py-4">
      <div>
        <img src={LOGOTYPE} alt="" />
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col items-center text-white">
          <img src={Main} alt="" />
          <p>Schedule</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <img src={Tablet_line} alt="" />
          <p>Sessions</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <img src={Vector} alt="" />
          <p>Tickets</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <img src={Search} alt="" />
          <p>Search</p>
        </div>
      </div>
      <div className="flex gap-2">
        <select className="border border-gray-500 rounded-lg px-2 py-1 focus:outline-none">
          <option value="ru">Рус</option>
          <option value="en">Eng</option>
          <option value="uz">O‘zb</option>
        </select>
        <button className="p-2 text-white w-24 bg-primary rounded-lg">
          Enter
        </button>
      </div>
    </div>
  );
};

export default Header;
