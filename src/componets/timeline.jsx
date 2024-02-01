"use client";

function Timelinee() {
  return (
    <div className=" bg-gray-100">
      <ol className="relative border-s  border-gray-400 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-300  rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm  font-medium leading-none text-gray-600 dark:text-gray-500">
            May 2020 - August 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Front-End Developer for Altamir Company
          </h3>
          <p className="text-sm   text-gray-800 font-semibold dark:text-gray-400">
            Designed and developed brilliant user interfaces using figma ,
            ReactJs , Css my design and technical skills have led to the
            creation of unique and beautiful user interfaces.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-300  rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm  font-medium leading-none text-gray-600 dark:text-gray-500">
            June 2022- July 2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ieee Uofk Technical Team
          </h3>
          <p className="text-sm   font-semibold  text-gray-800 dark:text-gray-400">
            Collaborated effectively with the technical team to seamlessly
            integrate design and development.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Timelinee;
