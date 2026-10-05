import React from 'react';
import {
  ButtonComponentStyle,
  CardComponentStyle,
  InputComponentStyle,
  BadgeComponentStyle,
} from '../types/components';

export class CSSAdapter {
  /**
   * Converts a dictionary of CSS variables to a React CSSProperties object.
   */
  public static toStyleObject(cssVariables: Record<string, string>): React.CSSProperties {
    const styleObj: Record<string, string> = {};
    for (const [key, val] of Object.entries(cssVariables)) {
      styleObj[key] = val;
    }
    return styleObj as React.CSSProperties;
  }

  /**
   * Generates a raw CSS string from a dictionary of CSS variables for a given selector.
   */
  public static toCssString(selector: string, cssVariables: Record<string, string>): string {
    const rules = Object.entries(cssVariables)
      .map(([key, val]) => `  ${key}: ${val};`)
      .join('\n');
    return `${selector} {\n${rules}\n}`;
  }

  /**
   * Helper to format Button component inline styles from resolved component definition.
   */
  public static getButtonBaseStyle(button: ButtonComponentStyle): React.CSSProperties {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: button.padding,
      fontFamily: button.fontFamily,
      fontSize: button.fontSize,
      fontWeight: button.fontWeight,
      letterSpacing: button.letterSpacing,
      textTransform: button.textTransform ?? 'none',
      borderRadius: button.borderRadius,
      borderWidth: button.borderWidth,
      borderStyle: button.borderStyle,
      borderColor: button.borderColor,
      backgroundColor: button.background,
      color: button.color,
      boxShadow: button.boxShadow,
      transition: button.transition,
      cursor: 'pointer',
      outline: 'none',
      textDecoration: 'none',
      userSelect: 'none',
    };
  }

  /**
   * Helper to format Card component inline styles from resolved component definition.
   */
  public static getCardBaseStyle(card: CardComponentStyle): React.CSSProperties {
    return {
      padding: card.padding,
      borderRadius: card.borderRadius,
      borderWidth: card.borderWidth,
      borderStyle: card.borderStyle,
      borderColor: card.borderColor,
      backgroundColor: card.background,
      color: card.color,
      boxShadow: card.boxShadow,
      backdropFilter: card.backdropFilter,
      WebkitBackdropFilter: card.backdropFilter,
      transition: card.transition,
    };
  }

  /**
   * Helper to format Input component inline styles from resolved component definition.
   */
  public static getInputBaseStyle(input: InputComponentStyle): React.CSSProperties {
    return {
      padding: input.padding,
      fontFamily: input.fontFamily,
      fontSize: input.fontSize,
      borderRadius: input.borderRadius,
      borderWidth: input.borderWidth,
      borderStyle: input.borderStyle,
      borderColor: input.borderColor,
      backgroundColor: input.background,
      color: input.color,
      boxShadow: input.boxShadow,
      backdropFilter: input.backdropFilter,
      WebkitBackdropFilter: input.backdropFilter,
      transition: input.transition,
      outline: 'none',
    };
  }

  /**
   * Helper to format Badge component inline styles from resolved component definition.
   */
  public static getBadgeBaseStyle(badge: BadgeComponentStyle): React.CSSProperties {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: badge.padding,
      fontFamily: badge.fontFamily,
      fontSize: badge.fontSize,
      fontWeight: badge.fontWeight,
      letterSpacing: badge.letterSpacing,
      textTransform: badge.textTransform ?? 'none',
      borderRadius: badge.borderRadius,
      borderWidth: badge.borderWidth,
      borderStyle: badge.borderStyle,
      borderColor: badge.borderColor,
      backgroundColor: badge.background,
      color: badge.color,
      boxShadow: badge.boxShadow,
      backdropFilter: badge.backdropFilter,
      WebkitBackdropFilter: badge.backdropFilter,
    };
  }
}
