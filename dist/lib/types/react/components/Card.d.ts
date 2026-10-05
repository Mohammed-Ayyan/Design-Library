import React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    styleId?: string;
    children: React.ReactNode;
}
export declare const Card: React.FC<CardProps>;
