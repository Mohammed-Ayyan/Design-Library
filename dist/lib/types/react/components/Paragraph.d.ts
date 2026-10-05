import React from 'react';
export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
export declare const Paragraph: React.FC<ParagraphProps>;
