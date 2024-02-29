"use client";

import Image from "next/image";

import facebook from "./img/facebook.svg";
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";
import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";

export default function SocialIconsGroup() {
  return (
    <div>
      <Image alt="" src={facebook} />
      <Image alt="" src={linkedin} />
      <Image alt="" src={github} />
      <Image alt="" src={twitter} />
      <Image alt="" src={instagram} />
    </div>
  );
}
