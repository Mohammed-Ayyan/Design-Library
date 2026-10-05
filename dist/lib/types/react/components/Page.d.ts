import React from 'react';
export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Page: React.FC<PageProps>;
