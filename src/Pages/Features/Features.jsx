import React from "react";
import feature1 from "../../assets/features/1.png";
import feature2 from "../../assets/features/2.png";
import feature3 from "../../assets/features/3.png";
const Features = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container py-10 mx-auto">
        <div className="text-center">
          <h1 class="text-4xl mb-3 font-semibold text-center text-link">
            Hoster’s More Features
          </h1>
          <span class="text-slate-500">
            Benefit from maximum availability, the best performance, and
            professional customer service. <br /> Allow us the opportunity to
            exceed your expectations.
          </span>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-50 rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <img src={feature1} alt="" />
            </span>

            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              ASSURED SPEED
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Redundant network connections at the backbone with 100 Mbit
              bandwidth enables rapid data transmission.
            </p>

            <a
              href="!#"
              class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span class="mx-1">read more</span>
              <svg
                class="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-50 rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <img src={feature2} alt="" />
            </span>

            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              IDEAL PROTECTION
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              My advanced virtualization platforms and RAID protected hard
              drives ensure the highest data security.
            </p>

            <a
              href="!#"
              class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span class="mx-1">read more</span>
              <svg
                class="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-50 rounded-xl dark:bg-gray-800">
            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <img src={feature3} alt="" />
            </span>

            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              ADVANCED STORAGE
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              My VPS come with up to 12 GB of RAM and 400 GB hard disk space,
              providing capacity for a variety of applications.
            </p>

            <a
              href="!#"
              class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span class="mx-1">read more</span>
              <svg
                class="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
