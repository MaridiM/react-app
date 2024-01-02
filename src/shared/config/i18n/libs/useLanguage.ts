import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from '../locales';
import type { LanguageCode, UseLanguage } from '../types';

const LANG_KEY = 'lng';
const languages: LanguageCode[] = Object.keys(translations) as LanguageCode[];

export const useLanguage = (): UseLanguage => {
	const { i18n } = useTranslation();

	const storedLanguage: LanguageCode | null = localStorage.getItem(LANG_KEY) as LanguageCode | null;
	const initialLanguage: LanguageCode = languages.includes(storedLanguage) ? storedLanguage : languages[0];

	const [value, setValue] = useState<LanguageCode>(initialLanguage);
	const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(initialLanguage);

	useEffect(() => {
		!storedLanguage && localStorage.setItem(LANG_KEY, value);

		setValue(initialLanguage);
		setCurrentLanguage(initialLanguage);
	}, [initialLanguage, storedLanguage, value]);

	const changeLanguage = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLElement> | LanguageCode): void  => {
		let optionValue: LanguageCode;

		if (typeof e === 'string') {
			optionValue = e as LanguageCode;
		} else {
			const targetElement = e.target as HTMLElement;
			optionValue = (targetElement?.textContent || '') as LanguageCode;
		}

		!languages.includes(optionValue) && (optionValue = initialLanguage);
		
		const idx: number = languages.indexOf(optionValue);
		(typeof e !== 'string' && e.target instanceof HTMLElement && e.target.textContent) && 
			(languages.length >= 2 && (optionValue = languages[languages.length - 1 !== idx ? idx + 1 : 0]));

		localStorage.setItem(LANG_KEY, optionValue);
		setValue(optionValue);
		setCurrentLanguage(optionValue);

		i18n.changeLanguage(optionValue)
			.catch((error) => console.error('Error changing language:', error));
	};

	return {
		value,
		changeLanguage,
		currentLanguage,
		setCurrentLanguage,
		languages: languages as readonly LanguageCode[],
	};
};

