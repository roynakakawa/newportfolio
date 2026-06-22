import Image from "next/image";
import { myInfo } from "./data";
import royito from "@/assets/royito.png";

export default function Home() {
  return (
    <div className="h-[calc(100dvh-6rem)] sm:h-[calc(100dvh-2.5rem)] justify-items-center">
      <main className="grid w-full sm:grid-cols-2 sm:max-w-1/2 pt-42">
        <div className="text-center sm:text-left mb-12">
          <h1 className="mb-6 text-lg font-bold glitch">Hello there! happy day</h1>
          <p className="mb-6 text-sm">This is <span className="underline decoration-dashed">{myInfo.name}</span></p>
          <p className="text-sm mb-12">{myInfo.intro}</p>
          <a href='/contact' className="text-sm hover-glitch">Want to chat?</a>
        </div>
        <div className="grid justify-items-center">
          <Image src={royito} height={140} width={140} alt="Roy"/>
        </div>
      </main>
    </div>
  );
}
