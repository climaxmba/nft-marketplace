import { NFTListHr } from "../utils";

export default function LiveAuctions() {
    return (
      <section className="h-screen py-12">
        <h2 className="text-lg text-center font-bold my-3">Latest Live Auctions</h2>
        <NFTListHr isDetailed={true} />
      </section>
    );
  }