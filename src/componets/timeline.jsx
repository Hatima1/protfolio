"use client";

function Timelinee() {
  return (
    <div className=" bg-gray-100">
      <ol className="relative border-s  border-gray-400 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-300  rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm  font-medium leading-none text-gray-600 dark:text-gray-500">
            May 2021 - March 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Front-End Developer for Altamir Company
          </h3>
          <p className="text-sm   text-black   font-semibold   dark:text-gray-400">
            Designed and developed brilliant user interfaces using wordpress ,
            Html , Css while optimize user experience and page loading speed by
            implementing best practices in SEO.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-300  rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm  font-medium leading-none text-gray-600 dark:text-gray-500">
            June 2022- May 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ieee Uofk Technical Team -Frontend developer
          </h3>
          <p className="text-sm  font-semibold   text-black  dark:text-gray-400">
            Collaborated effectively with the technical team to seamlessly
            integrate design and development.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Timelinee;
