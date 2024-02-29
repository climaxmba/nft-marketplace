"use client";

import Logo from "../Logo";
import CompanyLogosGroup from "@/src/assets/companyLogosGroup";

function SearchBox() {
  return <div>
    <input type="text" name="" placeholder="Items, collections and creators" />
    <label htmlFor="category-drp">Category</label>
    <select name="" id="category-drp">
      <option value="items">Items</option>
      <option value="collections">Collections</option>
      <option value="creators">Creators</option>
    </select>
    <span>Search</span>
  </div>
}

export default function Header() {
  return <header>
    <p>NON FUNGIBLE TOKENS</p>
    <h1>
      <span>A new NFT <Logo /></span>
      <span><Logo /> Experience</span>
    </h1>
    <p>Discover, collect and sell</p>

    <SearchBox />

    <CompanyLogosGroup />
  </header>;
}
