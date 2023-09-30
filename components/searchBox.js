import React from "react";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import "../app/globals.css";

let searchBox = ({ search, setSearch, searchBook }) => {
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-row gap-2">
          <div className="text-center flex-row w-full items-end md:flex-nowrap mb-6 md:mb-0 gap-4 ">
            <Input
              size="lg"
              type="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              label="Search"
              labelPlacement="outside"
              variant="faded"
              color="warning"
              className="text-warning	searchBox"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default searchBox;
