"use client";
import Logo from "./Logo";
import { Button } from "./utils";
import SocialIconsGroup from "../assets/SocialIconsGroup"

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <Logo /> NFT Market
          </div>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Liscence</a>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <ul>
            <li>
              <a href="#">Auctions</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>

          <Button text="My account" />
          </div>
          
          <SocialIconsGroup />
        </div>

        <div>
          <p>
            Nibh volutpat, aliquam id sagittis elementum.
            Pellentesque laoreet velit, sed egestas in. Id
            nam semper dolor tellus vulputate eget turpis.
          </p>

          <div>
            <input type="text" /><Button text="Sign in" type="submit" />
          </div>
        </div>
      </div>
    </footer>
  );
}
