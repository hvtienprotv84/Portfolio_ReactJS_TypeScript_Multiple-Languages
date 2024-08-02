import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

import translation_en from "./assets/locale/en/translation.json"
import translation_fa from "./assets/locale/fa/translation.json"
import translation_vn from "./assets/locale/vn/translation.json"
import translation_kr from "./assets/locale/kr/translation.json"

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("language") || 'en' || 'vn' || 'kr',
  resources: {
    en: {
      global: translation_en,
    },
    fa: {
      global: translation_fa,
    },
    vn: {
      global: translation_vn,
    },
    kr: {
      global: translation_kr,
    },
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);