"use client";

import Image from "next/image";

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
    <div>
      <div>Image</div>

      <div>
        <h4>NFT Name</h4>
        <span>Price</span>
      </div>

      <div>
        <span>ico</span>
        <span>time left</span>
      </div>

      <div>
        <div>{isDetailed && <span>imgs</span>}bidding</div>
        <div>
          <span>ico</span>
          {isDetailed && "Likes"}
        </div>
      </div>
    </div>
  );
}

export function NFTListHr({ isDetailed = false }) {
  return (
    <div>
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
