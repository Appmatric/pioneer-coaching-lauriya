import React from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import Home from "../components/Home/Home";

const MainLayout = () => {
  return (
    <div className="flex flex-col bg-gray-50">
      
      <NavigationBar />

      <main className="w-full">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;