"use client";

export function Button({
  text,
  type = "button",
}: {
  text: string;
  type?: "button" | "submit" | "reset";
}) {
  return <button type={type}>{text}</button>;
}
