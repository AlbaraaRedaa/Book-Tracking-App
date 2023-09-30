"use client";
import { NextUIProvider } from "@nextui-org/react";
import SearchPage from "@/app/search/page.js";
const Home = () => {
  return (
    <NextUIProvider>
      <SearchPage />
    </NextUIProvider>
  );
};
export default Home;
