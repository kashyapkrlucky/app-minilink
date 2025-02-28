// LanguageSwitcher.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { resources } from './i18n';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const items = [];
    for (const item in resources) {
      items.push({ name: item, text: resources[item].title });
    }
    setLanguages(items);
  }, []);

  const changeLanguage = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <select
        className="rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-sm text-gray-900"
        name="lang"
        onChange={(e) => changeLanguage(e)}
      >
        {languages.map((l) => (
          <option value={l.name} key={l.name}>
            {l.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
