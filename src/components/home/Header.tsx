"use client";

import Image from "next/image";
import logoPiece1 from "@/src/assets/img/logop1.svg";
import logoPiece2 from "@/src/assets/img/logop2.svg";
import CompanyLogosGroup from "@/src/assets/companyLogosGroup";
import NavBar from "../NavBar";

function SearchBox() {
  return (
    <div className="bg-white p-3 rounded">
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
    <header className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center">
        <p className="text-xs">NON FUNGIBLE TOKENS</p>
        <h1 className="text-6xl ">
          <span>
            A new NFT <Image alt="" src={logoPiece1} width={28} />
          </span>
          <span>
            <Image alt="" src={logoPiece2} width={28} /> Experience
          </span>
        </h1>
        <p>Discover, collect and sell</p>

        <SearchBox />
      </div>

      <CompanyLogosGroup />
    </header>
  );
}
