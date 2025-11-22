// src/app/page.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const clickHandler = () => {
    alert("Hello world!");
  };

  return (
    <div>
      <h1>Hello world</h1>
      <Button  className="bg-red-500 cursor-pointer transition duration-200 hover:scale-110" onClick={clickHandler}>Hello</Button>
    </div>
  );
}
