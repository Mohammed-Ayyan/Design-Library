import React from 'react';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}
export declare const Heading: React.FC<HeadingProps>;
