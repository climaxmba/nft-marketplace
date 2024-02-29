"use client";

import Header from "../components/home/Header";

// import type { RootState } from "@reduxjs/toolkit/query";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "../GlobalRedux/features/counter/counterSlice";

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <main>
      <Header />
    </main>
  );
}
