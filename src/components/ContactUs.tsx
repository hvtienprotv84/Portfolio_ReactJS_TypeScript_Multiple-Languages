import React, { useRef, FormEvent } from 'react';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { FaFacebookF, FaGithub, FaInbox, FaInstagram, FaLinkedinIn, FaSquareXTwitter } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiZalo, SiGmail } from "react-icons/si";
import { useTranslation } from 'react-i18next';

interface ContactProps { }

const ContactUs: React.FC<ContactProps> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response);
        },
        (error: any) => {
          console.error('FAILED...', error);
        }
      );
  };

  const [t, i18n] = useTranslation("global");

  return (
    <div className="flex flex-col lg:inline-flex items-center gap-4 px-4 w-full" id="contact">

      <form ref={form} onSubmit={sendEmail} className="flex flex-col text-blue-200 dark:text-blue-100 float-left">
        <h2 className="text-4xl">{t("content.contact")}</h2>
        <div className="inline-flex gap-4">

          <div className='flex flex-col'>
            <label className='text-black dark:text-white'>{t("content.name")}</label>
            <input className="bg-slate-200 dark:bg-slate-655 focus:outline-none rounded-xl p-5 my-4 w-80 border-2 border-transparent focus:border-blue-200" placeholder="Huỳnh Vĩnh Tiến" type="text" name="user_name" />
          </div>

          <div className='flex flex-col'>
            <label className='text-black dark:text-white'>{t("content.email")}</label>
            <input className="bg-slate-200 dark:bg-slate-655 focus:outline-none rounded-xl p-5 my-4 w-80 border-2 border-transparent focus:border-blue-200" placeholder="huynhvinhtien.84@gmail.com" type="email" name="user_email" />
          </div>

        </div>

        <div className='flex flex-col'>
        <label className='text-black dark:text-white'>{t("content.message")}</label>
        <textarea className="bg-slate-200 dark:bg-slate-655 focus:outline-none rounded-xl p-5 my-4 resize-none border-2 border-transparent focus:border-blue-200" placeholder="Xin Chào Bạn! Tôi Muốn Liên Hệ Với Bạn." name="message" />
        </div>

        {/* <input className="bg-blue-200 dark:bg-blue-100 text-white dark:text-black px-4 py-2 w-28 rounded-xl cursor-pointer" type="submit" value="Send" /> */}
        <button className="bg-blue-200 dark:bg-blue-100 text-white dark:text-black px-4 py-2 w-28 rounded-xl cursor-pointer" type="submit">{t("content.send")}</button>
      </form>


      <div className="float-right flex flex-col justify-center items-center w-1/2 p-5 h-full rounded-xl gap-2">
        <div className="flex flex-row justify-center text-5xl gap-5 mt-[100px] mb-[- 50px]">
        <a className='text-black dark:text-white' href="https://www.facebook.com/vinhtien.huynh.77/"><FaFacebookF /></a>
        <a className='text-white dark:text-black bg-black dark:bg-white p-1 rounded-xl' href="https://zalo.me/0931103224"><SiZalo /></a>
        <a className='text-black dark:text-white' href="https://github.com/hvtienprotv84"><FaGithub /></a>
          <a className='text-black dark:text-white' href="mailto:huynhvinhtien.84@gmail.com"><SiGmail /></a>
          <a className='text-black dark:text-white' href="/"><FaLinkedinIn /></a>
          <a className='text-black dark:text-white' href="/"><FaInstagram /></a>
          <a className='text-black dark:text-white' href="/"><FaSquareXTwitter /></a>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
