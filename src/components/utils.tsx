"use client";

import Image from "next/image";
import time from "@/src/assets/img/time.svg"
// import liked from "@/src/assets/img/liked.svg";
import like from "@/src/assets/img/like.svg";

export function Button({
  text,
  type = "button",
  outline = false,
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  outline?: boolean;
}) {
  return (
    <>
      {outline ? (
        <button type="button" className="rounded px-4 py-1 font-normal" style={{ opacity: "0.8", border: "1px solid" }}>
          {text}
        </button>
      ) : (
        <button
          className={"rounded px-4 py-1.5 font-semibold"}
          style={{
            background: "linear-gradient(-45deg, blue, royalblue)",
          }}
          type={type}
        >
          {text}
        </button>
      )}
    </>
  );
}

function NFTItem({ isDetailed = false }) {
  return (
    <div className="flex flex-col gap-2 border-gray-500 border p-3.5 rounded-lg">
      <div className={`${isDetailed ? "h-72 w-48" : "h-64 w-40" } bg-white rounded-lg`}>{"Image"}</div>

      <div className="flex justify-between gap-2">
        <h4>NFT Name</h4>
        <span className="font-bold text-xs py-1 px-2 rounded-md bg-indigo-900 text-indigo-400 tracking-wider">{"Price"}</span>
      </div>

      <div className="flex gap-2">
        <Image alt="" src={time} width={15} />
        <span>time left</span>
      </div>

      <div className="flex justify-between gap-2 pt-1 border-t border-gray-500">
        <div className="flex gap-1">{isDetailed && <span>Imgs</span>}bidding</div>
        <div className="flex gap-2">
          <Image alt="" src={like} width={15} />
          {isDetailed && "Likes"}
        </div>
      </div>
    </div>
  );
}

export function NFTListHr({ isDetailed = false }) {
  return (
    <div className="flex gap-6 w-full justify-center pt-6 overflow-x-scroll">
      <NFTItem isDetailed={isDetailed} />
      <NFTItem isDetailed={isDetailed} />
      <NFTItem isDetailed={isDetailed} />
      <NFTItem isDetailed={isDetailed} />
      <NFTItem isDetailed={isDetailed} />
    </div>
  );
}

export function NFTBandItem() {
  return (
    <div>
      <div>Image</div>
      <div>NFT</div>
    </div>
  );
}

export function TextAndButtons() {
  return (
    <div>
      <p>OVERLINE</p>
      <h2>Cursus vitae sollictudin donec nascetur. Join now</h2>
      <p>
        Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
        Mauris vestibulum eros libero amet tincidunt.
      </p>
      <div>
        <Button text={"Get started"} />
        <Button text={"Learn more"} />
      </div>
    </div>
  );
}
