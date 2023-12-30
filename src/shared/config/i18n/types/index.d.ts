import { translations } from '../locales'

export type LanguageCode = keyof typeof translations;

export interface UseLanguage {
    value: string
    currentLanguage: string
    languages: LanguageCode[]
    changeLanguage: (e: any) => void
    setCurrentLanguage: Dispatch<SetStateAction<string>>
    setLanguages: Dispatch<SetStateAction<LanguagesOptions[]>>
}
