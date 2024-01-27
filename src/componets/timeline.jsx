"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

function Timelinee() {
  return (
    <div className=" bg-gray-100">
      <ol className="relative border-s  border-gray-400 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-teal-900 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm  font-medium leading-none text-gray-600 dark:text-gray-500">
            March 2022- March 2025
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p className="text-sm  font-medium  text-gray-600 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm  font-medium leading-none text-gray-600 dark:text-gray-500">
            March 2022- March 2025
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            front end in Figma
          </h3>
          <p className="text-sm  font-medium  text-gray-600 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Harum esse fugiat libero aut necessitatibus hic deleniti quas!
            Labore corrupti est, nulla eveniet voluptates, expedita in
            reiciendis nisi quas suscipit incidunt.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Timelinee;
