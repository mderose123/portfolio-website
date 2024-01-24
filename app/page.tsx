"use client";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f6f6]">
      <Navbar></Navbar>

      <div className="container mt-24 mx-auto px-12 py-4">
        <HeaderSection />
      </div>
    </main>
  );
}
