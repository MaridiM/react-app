# Использование Кастомного Хука для Перевода (useTranslate)

## Введение

`useTranslate` - это кастомный хук, предназначенный для удобного использования библиотеки `react-i18next` в вашем проекте для локализации текста. Этот хук позволяет легко получать переводы из файла локализации для заданного типа и слоев.

## Установка

Для начала убедитесь, что вы установили библиотеку `react-i18next` в вашем проекте:

```bash
npm install react-i18next i18next i18next-http-backend i18next-browser-languagedetector
```

После установки, вы можете использовать `useTranslate` в ваших компонентах.

## Использование

```jsx
// Импортируем хук
import { useTranslate } from 'shared/config';

// Пример использования хука
const {
    translation: { login, forgot },
} = useTranslate('auth', [
    ['login', true],
    ['forgot', true],
]);

// Другой пример
const {
    translation: { register, support },
} = useTranslate('auth', [
    ['register', true],
    ['support', true],
]);
```

## API

### useTranslate

Кастомный хук `useTranslate` принимает следующие параметры:

-   `type: string | null`: Тип локализации (например, 'auth'). По умолчанию `null`.
-   `layers: any[]`: Слои для получения переводов. Каждый слой представляет собой массив, где первый элемент - ключ, а второй - булевое значение, указывающее, нужно ли возвращать объект. По умолчанию `[]`.

Хук возвращает объект с полями:

-   `translation: Record<string, any>`: Объект с переводами для указанных ключей.
-   `type: string | null`: Тип локализации.

## Примеры Файлов Локализации (locales/en/error.json)

```json
{
    "auth": {
        // ... (остальные переводы) ...

        "login": {
            "title": "Sign In as a",
            "roles": {
                "doctor": "Doctor",
                "dentist": "Dentist",
                "patient": "Patient",
                "admin": "Admin"
            },
            "buttons": {
                "submit": "Sign In"
            },
            "links": {
                "forgot": "Forgot password?",
                "register": "Don't have an account?"
            }
        },

        "forgot": {
            // ... (остальные переводы) ...
        }

        // ... (остальные переводы) ...
    }
}
```

## Примеры Использования

### Пример 1

```jsx
const {
    translation: { login, forgot },
} = useTranslate('auth', [
    ['login', true],
    ['forgot', true],
]);

// Использование переводов
console.log(login.title); // "Sign In as a"
console.log(forgot.button); // "Forgot password?"
```

### Пример 2

```jsx
const {
    translation: { register, support },
} = useTranslate('auth', [
    ['register', true],
    ['support', true],
]);

// Использование переводов
console.log(register.links.back); // "Sign Up as a"
console.log(support.button.submit); // "Support"
```

## Заключение

`useTranslate` делает процесс локализации простым и удобным, позволяя легко получать переводы из файлов локализации для заданного типа и слоев. Это удобное решение для обеспечения вашего приложения многоязычностью.
