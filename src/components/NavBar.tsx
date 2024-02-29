"use client";

import Logo from "./Logo";
import { Button } from "./utils";

export default function NavBar() {
  return <nav className="flex items-center justify-between p-3">
    <Logo />

    <ul className="flex items-center justify-center gap-3.5 sm:none" style={{opacity: "0.8"}}>
      <li><a href="#">Auctions</a></li>
      <li><a href="#">Roadmap</a></li>
      <li><a href="#">Discover</a></li>
      <li><a href="#">Community</a></li>
    </ul>

    <div className="flex gap-2">
      <Button text="Contact" outline={true} />
      <Button text="My account" />
    </div>
  </nav>;
}
