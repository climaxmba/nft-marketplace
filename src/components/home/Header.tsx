"use client";

import Image from "next/image";
import logoPiece1 from "@/src/assets/img/logop1.svg";
import logoPiece2 from "@/src/assets/img/logop2.svg";
import CompanyLogosGroup from "@/src/assets/companyLogosGroup";
import NavBar from "../NavBar";

function SearchBox() {
  return (
    <div>
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
    <header>
      <NavBar />
      <p>NON FUNGIBLE TOKENS</p>
      <h1>
        <span>
          A new NFT <Image alt="" src={logoPiece1} />
        </span>
        <span>
          <Image alt="" src={logoPiece2} /> Experience
        </span>
      </h1>
      <p>Discover, collect and sell</p>

      <SearchBox />

      <CompanyLogosGroup />
    </header>
  );
}
