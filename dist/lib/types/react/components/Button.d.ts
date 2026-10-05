import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    styleId?: string;
    children: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
