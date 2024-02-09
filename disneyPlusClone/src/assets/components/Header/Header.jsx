import React from "react";
import logo from "../Header/image/logo.svg.png";
import avatar from "../Header/image/avatar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    { name: "INICIO", icon: HiHome },
    { name: "PESQEUISA", icon: HiMagnifyingGlass },
    { name: "MINHA LISTA", icon: HiPlus },
    { name: "ORIGINAL", icon: HiStar },
    { name: "FILMES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div >
      <img src={avatar} className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
