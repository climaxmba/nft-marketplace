"use client";

import Image from "next/image";
import { TextAndButtons } from "../utils";
import activeUser from "@/src/assets/img/activeuser.svg";
import artwork from "@/src/assets/img/artworks.svg";
import artists from "@/src/assets/img/artists.svg";
import ethspent from "@/src/assets/img/ethspent.svg";

function StatItem({
  number,
  iconPath,
  underTxt,
  includeUnit = true,
}: {
  number: number | string;
  iconPath: string;
  underTxt: string;
  includeUnit?: boolean;
}) {
  return (
    <div>
      <Image alt="" role="icon" src={iconPath} width={28} />
      <div>
        {number}
        {includeUnit && "k"}
      </div>
      <div>{underTxt}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section>
      <div>
        <StatItem number={300} iconPath={activeUser} underTxt="Users Active" />
        <StatItem number="52,5" iconPath={artwork} underTxt="Artwork" />
        <StatItem number={"17,5"} iconPath={artists} underTxt="Artists" />
        <StatItem number={35.58} iconPath={ethspent} underTxt="ETH Spent" />
      </div>

      <div>
        <Image src={""} alt="" />
        <TextAndButtons />
      </div>
    </section>
  );
}
