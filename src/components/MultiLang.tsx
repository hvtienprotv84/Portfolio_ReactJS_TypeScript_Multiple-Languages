import React from 'react';

import Dropdown from './Dropdown'

import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';

import IR from "../assets/icon/iran.jpeg"
import USA from "../assets/icon/usa.jpeg"
import VN from "../assets/icon/vietnam.png"
import KR from "../assets/icon/hanquoc.svg"
import JP from "../assets/icon/nhat.svg"

type Props = {}

function MultiLang({ }: Props) {
    // Multi Language Functions
    const [t, i18n] = useTranslation("global");


    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        document.documentElement.className = lang;
        document.documentElement.setAttribute('lang', lang);
    };

    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "en");
    }

    if(localStorage.getItem("language") === "en") {
        document.documentElement.setAttribute('dir', "ltr");
        document.title = "Vĩnh Tiến - Portfolio - EN";
        
    } else if (localStorage.getItem("language") === "fa") {
        document.documentElement.setAttribute('dir', "ltr"); 
        // nếu muốn khi chuyển ngôn ngữ và chuyển hướng từ trái sang phải thì dùng "rtl" thay thế cho "ltr"
        document.title = "Vĩnh Tiến - Portfolio - FA";
    }
    else if (localStorage.getItem("language") === "vn") {
        document.documentElement.setAttribute('dir', "ltr"); 
        // nếu muốn khi chuyển ngôn ngữ và chuyển hướng từ trái sang phải thì dùng "rtl" thay thế cho "ltr"
        document.title = "Vĩnh Tiến - Portfolio - VN";
    }
    else if (localStorage.getItem("language") === "kr") {
        document.documentElement.setAttribute('dir', "ltr"); 
        // nếu muốn khi chuyển ngôn ngữ và chuyển hướng từ trái sang phải thì dùng "rtl" thay thế cho "ltr"
        document.title = "Vĩnh Tiến - Portfolio - KR";
    }

    

    // Dropdown values
    const options = [
        { value: 'VN', label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("vn")}><p>VN</p> &#10240;<img src={VN} className="rounded" alt="IRAN Flag" width="50px" loading="lazy" /></button> },
        { value: 'FA', label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("en")}><p>EN</p> &#10240;<img src={USA} className="rounded" alt="USA Flag" width="50px" loading="lazy" /></button> },
        { value: 'KR', label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("kr")}><p>KR</p> &#10240;<img src={KR} className="rounded" alt="USA Flag" width="50px" loading="lazy" /></button> },
        { value: 'EN', label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("fa")}><p>JP</p> &#10240;<img src={JP} className="rounded" alt="IRAN Flag" width="50px" loading="lazy" /></button> },
        { value: 'EN', label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("fa")}><p>FA</p> &#10240;<img src={IR} className="rounded" alt="IRAN Flag" width="50px" loading="lazy" /></button> },
    ];

    return (
        <div className="text-gray-100 dark:text-white">
            <Dropdown
                options={options}
                text={<button><IoLanguage /></button>}
            />
        </div>
    )
}

export default MultiLang;