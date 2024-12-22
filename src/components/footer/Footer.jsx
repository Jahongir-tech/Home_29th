import React from "react";
import Logotype from "@/assets/footer/LOGOTYPE.svg";
import Google from "@/assets/footer/image 8.svg";
import AppStore from "@/assets/footer/image 7.svg";
import a from "@/assets/icons/1.svg";
import b from "@/assets/icons/2.svg";
import c from "@/assets/icons/3.svg";
import d from "@/assets/icons/4.svg";
import e from "@/assets/icons/5.svg";
import f from "@/assets/icons/6.svg";
import g from "@/assets/icons/7.svg";
import h from "@/assets/icons/8.svg";
import Instagram from "@/assets/footer/instagram-line.svg";
import Facebook from "@/assets/footer/facebook-circle-line.svg";
import YouTube from "@/assets/footer/youtube-line.svg";

const Footer = () => {
  return (
    <div className="py-20 ">
      <div className="flex justify-between bg-[#111111] p-7 rounded-lg container">
        <div className="grid gap-4 w-1/4">
          <img className="pb-8" src={Logotype} alt="" />
          <img src={Google} alt="" />
          <img src={AppStore} alt="" />
        </div>
        <div className="text-white pt-4 w-1/4">
          <h2>About</h2>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={a} alt="" />
            <p>Public offer</p>
          </div>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={b} alt="" />
            <p>Advertising</p>
          </div>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={c} alt="" />
            <p>F.A.Q</p>
          </div>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={d} alt="" />
            <p>Contact</p>
          </div>
        </div>
        <div className="text-white pt-4 w-1/4">
          <h2>Category</h2>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={e} alt="" />
            <p>Movies</p>
          </div>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={f} alt="" />
            <p>Theater</p>
          </div>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={g} alt="" />
            <p>Concerts</p>
          </div>
          <div className="flex gap-2 text-slate-400 pt-6">
            <img src={h} alt="" />
            <p>Sport</p>
          </div>
        </div>
        <div className="text-white pt-4 w-1/4 ">
          <h2>Contact us</h2>
          <div className="flex gap-4 text-slate-400 pt-6">
            <p className="text-primary">+998 (95) 897-33-38</p>
          </div>
          <div className="flex gap-4 flex-col text-slate-400 pt-6">
            <div>
              <p>Social media</p>
            </div>
            <div className="flex flex-row gap-6">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={YouTube} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
