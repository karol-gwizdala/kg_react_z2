import { ReactNode } from "react";

export interface ButtonProps {
    className: string;
    children: ReactNode;
    onClick: () => void;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
    <button className={className} onClick={onClick}>
        {children}
    </button>
}