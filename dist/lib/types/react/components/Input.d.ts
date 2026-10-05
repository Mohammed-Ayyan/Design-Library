import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    styleId?: string;
}
export declare const Input: React.FC<InputProps>;
