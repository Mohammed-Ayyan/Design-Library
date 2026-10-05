import React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    styleId?: string;
    children: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;
