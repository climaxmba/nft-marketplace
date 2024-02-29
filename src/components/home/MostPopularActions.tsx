"use client";

import { Button, NFTListHr } from "../utils";

export default function MostPopularAuctions() {
  return (
    <section>
      <p>OVERLINE</p>
      <h2>Most Popular Live Auctions</h2>

      <input type="radio" name="auct-cat" id="architecture" />
      <input type="radio" name="auct-cat" id="photography" />
      <input type="radio" name="auct-cat" id="games" />
      <input type="radio" name="auct-cat" id="music" />

      <div>
        <label htmlFor="architecture">Architecture</label>
        <label htmlFor="photography">Photography</label>
        <label htmlFor="games">Games</label>
        <label htmlFor="music">Music</label>
      </div>

      <NFTListHr />

      <Button text="Show me more" />
    </section>
  );
}
