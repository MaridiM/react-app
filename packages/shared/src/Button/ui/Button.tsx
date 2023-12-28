import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
};

export default Button;