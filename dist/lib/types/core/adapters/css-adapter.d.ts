import React from 'react';
import { ButtonComponentStyle, CardComponentStyle, InputComponentStyle, BadgeComponentStyle } from '../types/components';
export declare class CSSAdapter {
    /**
     * Converts a dictionary of CSS variables to a React CSSProperties object.
     */
    static toStyleObject(cssVariables: Record<string, string>): React.CSSProperties;
    /**
     * Generates a raw CSS string from a dictionary of CSS variables for a given selector.
     */
    static toCssString(selector: string, cssVariables: Record<string, string>): string;
    /**
     * Helper to format Button component inline styles from resolved component definition.
     */
    static getButtonBaseStyle(button: ButtonComponentStyle): React.CSSProperties;
    /**
     * Helper to format Card component inline styles from resolved component definition.
     */
    static getCardBaseStyle(card: CardComponentStyle): React.CSSProperties;
    /**
     * Helper to format Input component inline styles from resolved component definition.
     */
    static getInputBaseStyle(input: InputComponentStyle): React.CSSProperties;
    /**
     * Helper to format Badge component inline styles from resolved component definition.
     */
    static getBadgeBaseStyle(badge: BadgeComponentStyle): React.CSSProperties;
}
