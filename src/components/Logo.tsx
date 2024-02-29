"use client";
import logo from "../assets/img/logo.svg";
import Image from "next/image";

export default function Logo() {
  return <Image alt="logo" src={logo} width={28} />;
}
