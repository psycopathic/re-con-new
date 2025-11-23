// src/app/page.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Hello world</h1>

        <input
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder-gray-400"
          placeholder="this is the input number 1"
        />

        <progress
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder-gray-400"
        />

        <div className="mt-2">
          <Button className="w-full transition-transform duration-150 hover:scale-105 active:scale-95">
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
}