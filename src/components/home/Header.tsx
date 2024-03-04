"use client";

import "./Header.css"
import Image from "next/image";
import logoPiece1 from "@/src/assets/img/logop1.svg";
import logoPiece2 from "@/src/assets/img/logop2.svg";
import CompanyLogosGroup from "@/src/assets/companyLogosGroup";
import NavBar from "../NavBar";

function SearchBox() {
  return (
    <div className="bg-white p-3 rounded mt-6 text-black">
      <input
        type="text"
        name=""
        placeholder="Items, collections and creators"
      />
      <label htmlFor="category-drp">Category</label>
      <select name="" id="category-drp">
        <option value="items">Items</option>
        <option value="collections">Collections</option>
        <option value="creators">Creators</option>
      </select>
      <span>Search</span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-between header">
      <NavBar />

      <div className="flex flex-col items-center">
        <p className="text-xs text-gray-400 tracking-wider">NON FUNGIBLE TOKENS</p>
        <h1 className="text-6xl font-black flex flex-col my-6">
          <span className="mr-6 flex gap-2 items-center">
            A new NFT <Image alt="" src={logoPiece1} width={20} style={{display: "inline"}} />
          </span>
          <span className="ml-6">
            <Image alt="" src={logoPiece2} width={28} style={{display: "inline"}} /> Experience
          </span>
        </h1>
        <p className="text-gray-400">Discover, collect and sell</p>

        <SearchBox />
      </div>

      <CompanyLogosGroup />
    </header>
  );
}
