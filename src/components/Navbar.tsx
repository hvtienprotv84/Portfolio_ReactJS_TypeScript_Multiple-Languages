import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF} from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import MultiLang from './MultiLang';
import ToggleDark from './ToggleDark';

import ICON from "../assets/icon/logo_22.png";

type Props = {}

function Navbar({ }: Props) {
  const [t, i18n] = useTranslation("global");

  // NavBar Responsive
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    // <main className={`nav ${isActive ? "active" : "disable"}`}>
      <header className={`flex flex-col items-center justify-start float-left fixed top-12 left-12 bottom-12 z-10 isolate nav ${isActive ? "active" : "disable"}`}>
        <nav className="flex flex-col justify-between items-center flex-auto max-w-12">
          <a href="/" className="flex items-center justify-center p-0 w-16 h-16 text-3xl">
            <img src={ICON} className=" logo dark:bg-white rounded-full" alt="Logo" />
          </a>

          <ul className="rotate-180 flex flex-row-reverse relative uppercase [writing-mode:vertical-lr]" >
            <li className="block m-0 p-0 pt-8 hover:text-blue-200 dark:hover:text-blue-100 [writing-mode:vertical-rl] text-black dark:text-white">
              <a onClick={removeActive} href="#about">{t("navbar.about")}</a>
            </li>
            <li className="block m-0 p-0 pt-8 hover:text-blue-200 dark:hover:text-blue-100 [writing-mode:vertical-rl] text-black dark:text-white">
              <a onClick={removeActive} href="#skills">{t("navbar.skills")}</a>
            </li>
            <li className="block m-0 p-0 pt-8 hover:text-blue-200 dark:hover:text-blue-100 [writing-mode:vertical-rl] text-black dark:text-white">
              <a onClick={removeActive} href="#projects">{t("navbar.work")}</a>
            </li>
            <li className="block m-0 p-0 pt-8 hover:text-blue-200 dark:hover:text-blue-100 [writing-mode:vertical-rl] text-black dark:text-white">
              <a onClick={removeActive} href="#contact">{t("navbar.contact")}</a>
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center social">
            <a onClick={removeActive} href="https://www.facebook.com/vinhtien.huynh.77/" target="_blank" className="flex items-center justify-center p-0 w-12 h-12 text-black dark:text-white text-3xl hover:text-blue-200 dark:hover:text-blue-100"><FaFacebookF /></a>
            <a onClick={removeActive} href="https://zalo.me/0931103224" target="_blank" className="flex items-center justify-center p-0 w-12 h-12 text-black dark:text-white text-3xl hover:text-blue-200 dark:hover:text-blue-100"><SiZalo /></a>
            <a onClick={removeActive} href="https://github.com/hvtienprotv84" target="_blank" className="flex items-center justify-center p-0 w-12 h-12 text-black dark:text-white text-3xl hover:text-blue-200 dark:hover:text-blue-100"><FaGithub /></a>
          </div>
        </nav>
        <div className="fixed z-40 top-4 right-4 lg:top-16 lg:right-12 transform translate-z-[0] text-base flex items-start text-gray-100 dark:text-white toggle">
          <ToggleDark />
          <MultiLang />
        <div className={`hamburger ${isActive ? "active" : ''}`} onClick={toggleActiveClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </div>
      </header>
    // </main>
  )
}

export default Navbar