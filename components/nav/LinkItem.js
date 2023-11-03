import React from "react";
import Link from "next/link";

function LinkItem(props) {
  const { name, route, children } = props;
  return (
    <div className="flex items-center  sm:my-5">
      <Link href={route} className="text-xl active:font-bold">
        <div className="flex  rounded-full p-1 flex-row items-center">
          {children}
          <h1 className="dark:text-white hidden md:flex  md:text-[1.5em] ml-5">
            {name}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default LinkItem;
