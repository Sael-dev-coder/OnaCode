import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";
export default function Home() {
  return (
    <>
      <div className="inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-white after:to-transparent after:pointer-events-none">
        <NavBar />
        <header className="flex flex-col justify-center items-center w-full min-h-screen space-y-5">
          <h1 className="text-6xl text-center font-bold max-w-170">
            Tu presencia digital, más simple y poderosa
          </h1>
          <p className="max-w-180 text-center">
            En Onacode diseñamos sitios web modernos, accesibles y estratégicos
            para que tu empresa destaque frente a la competencia
          </p>
          <Button>Cotiza Ahora!</Button>
        </header>
      </div>
      <section className="flex flex-col justify-center items-center w-full min-h-screen space-y-5">
        <AuroraText className="text-5xl font-bold">Services</AuroraText>
      
      </section>
    </>
  );
}
