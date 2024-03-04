"use client";

import Image from "next/image";

import ritterSport from "./img/rittersport.svg";
import nike from "./img/nike.svg";
import adidas from "./img/adidas.svg";
import newHolland from "./img/newholland.svg";

export default function CompanyLogosGroup() {
  return (
    <div className="flex gap-20 justify-center pb-6">
      <Image alt="" src={ritterSport} height={30} />
      <Image alt="" src={nike} height={30} />
      <Image alt="" src={adidas} height={30} />
      <Image alt="" src={newHolland} height={30} />
    </div>
  );
}
