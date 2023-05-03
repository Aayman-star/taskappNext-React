import Image from "next/image";
import { Inter } from "next/font/google";
import Tasks from "./Tasks";
import Moon from "public/Moon.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Image src={Moon} alt="background-image" /> */}
      <div className="w-full h-screen bg-[url('/Moon.svg')] bg-no-repeat bg-center">
        <h1 className="text-green-900 font-extrabold text-4xl text-center mt-10">
          Welcome to the Task List
        </h1>
        <Tasks />
      </div>
    </main>
  );
}
