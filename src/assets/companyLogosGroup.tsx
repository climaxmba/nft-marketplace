"use client";

import Image from "next/image";

import ritterSport from "./img/rittersport.svg";
import nike from "./img/nike.svg";
import adidas from "./img/adidas.svg";
import newHolland from "./img/newholland.svg";

export default function CompanyLogosGroup() {
  return (
    <div>
      <Image alt="" src={ritterSport} />
      <Image alt="" src={nike} />
      <Image alt="" src={adidas} />
      <Image alt="" src={newHolland} />
    </div>
  );
}
