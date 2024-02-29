"use client";

import Logo from "./Logo";
import { Button } from "./utils";

export default function NavBar() {
  return <nav>
    <Logo />

    <ul>
      <li><a href="#">Auctions</a></li>
      <li><a href="#">Roadmap</a></li>
      <li><a href="#">Discover</a></li>
      <li><a href="#">Community</a></li>
    </ul>

    <div>
      <Button text="Contact" />
      <Button text="My account" />
    </div>
  </nav>;
}
