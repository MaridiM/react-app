import { ButtonHTMLAttributes, FC } from 'react';

import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, text, className, ...rest }) => (
    <button type='button' className={`${style.btn} ${className}`} {...rest}>
        <span className={style.btn__text}>{children ?? text}</span>
    </button>
);

export default Button;
