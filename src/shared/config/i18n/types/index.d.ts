import type { translations } from '../locales';

export type Layer = string | (string | boolean)[];

export type LanguageCode = keyof typeof translations;

export interface UseLanguage {
    value: LanguageCode
    currentLanguage: LanguageCode
    languages: readonly LanguageCode[]
    changeLanguage: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLElement> | LanguageCode) => void
    setCurrentLanguage: Dispatch<SetStateAction<string>>
}
