import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center font-semibold w-full justify-between text-center text-white p-4">
      <h1 className="font-semibold">Documents</h1>
      <h2 className="py-1.5 px-3  hover:bg-[#1f1f1f] cursor-pointer text-sm rounded-md">
        GitHub
      </h2>
    </nav>
  );
};

export default NavBar;
