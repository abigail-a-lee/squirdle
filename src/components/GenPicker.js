import React, { useRef, useState, useContext } from "react";
import App, { AppContext } from "../App";

function GenPicker() {
  const { genSelect, setGen, restartGame } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function openMenu(e) {
    setIsOpen(!isOpen);
    menuRef.current.classList.toggle("hidden");
    if (isOpen) {
      e.currentTarget.blur();
    }
  }

  function pickGen(gen) {
    setGen(gen);
    restartGame();
  }

  return (
    <div class="fixed inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex w-[110px] bg-sky-900 justify-center rounded-md border border-gray-300  py-1 text-xs shadow-sm hover:bg-sky-800 focus:bg-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:text-white"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={openMenu}
        >
          Generation
          {/*       Options
      <!-- Heroicon name: mini/chevron-down --> */}
          <svg
            class="mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/*   <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div
        class="relative hidden bg-sky-900 right-0 z-10 mt-2 w-18 origin-top-right rounded-md shadow-lg border border-gray-300 ring-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
        ref={menuRef}
      >
        <div class="py-1" role="none">
          {/*   <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <span
            class="hover:bg-sky-800 select-none cursor-pointer block px-4 py-2 text-xs"
            onClick={() => {
              pickGen("all");
              openMenu();
            }}
          >
            All
          </span>
          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block px-4 py-2 text-xs"
            onClick={() => {
              pickGen("gen1");
              openMenu();
            }}
          >
            Gen 1
          </span>
          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block px-4 py-2 text-xs"
            onClick={() => {
              pickGen("gen2");
              openMenu();
            }}
          >
            Gen 2
          </span>

          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block w-full px-4 py-2 text-left text-xs"
            onClick={() => {
              pickGen("gen3");
              openMenu();
            }}
          >
            Gen 3
          </span>
          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block px-4 py-2 text-xs"
            onClick={() => {
              pickGen("gen4");
              openMenu();
            }}
          >
            Gen 4
          </span>
          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block px-4 py-2 text-xs"
            onClick={() => {
              pickGen("gen5");
              openMenu();
            }}
          >
            Gen 5
          </span>

          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block w-full px-4 py-2 text-left text-xs"
            onClick={() => {
              pickGen("gen6");
              openMenu();
            }}
          >
            Gen 6
          </span>
          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block px-4 py-2 text-xs"
            onClick={() => {
              pickGen("gen7");
              openMenu();
            }}
          >
            Gen 7
          </span>

          <span
            class="hover:bg-sky-800 cursor-pointer  select-none block w-full px-4 py-2 text-left text-xs"
            onClick={() => {
              pickGen("gen8");
              openMenu();
            }}
          >
            Gen 8
          </span>
        </div>
      </div>
    </div>
  );
}

export default GenPicker;
