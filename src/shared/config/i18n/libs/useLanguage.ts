import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from '../locales';
import { LanguageCode, UseLanguage } from '../types';

const LANG_KEY = 'lng';
const languages: LanguageCode[] = Object.keys(translations) as LanguageCode[];

export const useLanguage = (): UseLanguage => {
    const { i18n } = useTranslation();

    const storedLanguage: LanguageCode = localStorage.getItem(LANG_KEY) as LanguageCode;
    const initialLanguage: LanguageCode = languages.includes(storedLanguage) ? storedLanguage : languages[0];

    const [value, setValue] = useState<string>(initialLanguage);
    const [currentLanguage, setCurrentLanguage] = useState<string>(initialLanguage);
    // const [options, setOptions] = useState<LanguageCode[]>(languages);

    useEffect(() => {
        if (!storedLanguage) {
            localStorage.setItem(LANG_KEY, value);
        }

        // const existLang = options.find((option: string) => option === storedLanguage);

        // if (!existLang) {
            setValue(initialLanguage);
            setCurrentLanguage(initialLanguage);
        // }
    }, [initialLanguage, /*options*/, storedLanguage, value]);

    const changeLanguage = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLElement> | LanguageCode | any) => {
        let optionValue = !!e.target && !!e.target.textContent ? e.target.textContent : e 
        optionValue = languages.includes(optionValue) ? optionValue :  initialLanguage

        const idx: number = languages.indexOf(optionValue)
        if (!!e.target && !!e.target.textContent) {
            languages.length >= 2 && (optionValue = languages[languages.length - 1 !== idx ? idx + 1 : 0])
        }

        if (languages.includes(optionValue)) {
            localStorage.setItem(LANG_KEY, optionValue);
            setValue(optionValue);
            setCurrentLanguage(optionValue);
            i18n.changeLanguage(optionValue);
        }
    };


    return {
        value,
        changeLanguage,
        currentLanguage,
        setCurrentLanguage,
        languages: [],
        setLanguages: () => {},
        // languages: options,
        // setLanguages: setOptions,
    };
};
