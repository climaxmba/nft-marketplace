"use client";

import Header from "../components/home/Header";
import LiveAuctions from "../components/home/LiveAuctions";
import { USection } from "../components/home/Sections";
import NFTListBand from "../components/home/NFTListBand";
import MostPopularAuctions from "../components/home/MostPopularActions";
import Stats from "../components/home/Stats";

// import type { RootState } from "@reduxjs/toolkit/query";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "../GlobalRedux/features/counter/counterSlice";

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <LiveAuctions />
      <USection />
      <MostPopularAuctions />
      <Stats />
      <NFTListBand />
    </div>
  );
}
