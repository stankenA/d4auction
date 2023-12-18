import { type FC } from "react";
import Inventory from "../Inventory/Inventory";

const MainPage: FC = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-black font-sans text-white">
      <Inventory />
      <Inventory />
    </main>
  );
};

export default MainPage;
