import { NFTListHr } from "../utils";

export default function LiveAuctions() {
    return (
      <section>
        <h2>Latest Live Auctions</h2>
        <NFTListHr isDetailed={true} />
      </section>
    );
  }