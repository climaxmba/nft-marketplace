"use client";

import Image from "next/image";
import NavBar from "../NavBar";
import { Button } from "../utils";

import liked from "@/src/assets/img/liked.svg";
import copy from "@/src/assets/img/copy.svg";
import share from "@/src/assets/img/share.svg";

function NFTInfo() {
  return (
    <section>
      <Image src={""} alt="NFT image" />

      <div>
        <div>
          <h2>{"NFT Name"}</h2>
          <p>{"Additional info"}</p>
        </div>

        <div>
          <span>Current price</span>
          <span>Time left</span>

          <span>
            {"price"}
            <span>{"currency"}</span>
          </span>
          <span>
            <span>{"time"}</span>
            <span>{"duration"}</span>
          </span>

          <Button text="Place a bid" />

          <div>Image</div>
        </div>
      </div>

      <div>
        <Image src={liked} alt="" />
        <Image src={copy} alt="" />
        <Image src={share} alt="" />
      </div>
    </section>
  );
}

export default function Header() {
  return (
    <header>
      <NavBar />
      <NFTInfo />
    </header>
  );
}
