import type { ButtonHTMLAttributes, FC } from 'react';

import style from './Button.module.sass';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, text, className, ...rest }) => (
	<button type='button' className={`${style.btn} ${className}`} { ...rest } >{children ?? text}</button>
);

export default Button;