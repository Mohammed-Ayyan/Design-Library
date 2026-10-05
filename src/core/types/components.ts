export interface InteractiveStateStyles {
  background?: string;
  color?: string;
  borderColor?: string;
  boxShadow?: string;
  transform?: string;
  opacity?: string | number;
}

export interface ButtonComponentStyle {
  padding: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string | number;
  letterSpacing?: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  borderRadius: string;
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  background: string;
  color: string;
  boxShadow: string;
  transition: string;
  hover: InteractiveStateStyles;
  active: InteractiveStateStyles;
  focusRing: string;
}

export interface CardComponentStyle {
  padding: string;
  borderRadius: string;
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  background: string;
  color: string;
  boxShadow: string;
  backdropFilter?: string;
  transition: string;
  hover?: InteractiveStateStyles;
}

export interface HeadingComponentStyle {
  fontFamily: string;
  fontWeight: string | number;
  letterSpacing: string;
  lineHeight: string | number;
  color: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}

export interface ParagraphComponentStyle {
  fontFamily: string;
  fontSize: string;
  lineHeight: string | number;
  color: string;
}

export interface InputComponentStyle {
  padding: string;
  fontFamily: string;
  fontSize: string;
  borderRadius: string;
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  background: string;
  color: string;
  placeholderColor: string;
  boxShadow?: string;
  backdropFilter?: string;
  focusBorderColor: string;
  focusRing: string;
  transition: string;
}

export interface BadgeComponentStyle {
  padding: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string | number;
  letterSpacing?: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  borderRadius: string;
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  background: string;
  color: string;
  boxShadow?: string;
  backdropFilter?: string;
}

export interface SectionComponentStyle {
  padding: string;
  background: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  backdropFilter?: string;
}

export interface PageComponentStyle {
  background: string;
  color: string;
  fontFamily: string;
  backgroundImage?: string;
}

export interface ComponentStyles {
  button: ButtonComponentStyle;
  card: CardComponentStyle;
  heading: HeadingComponentStyle;
  paragraph: ParagraphComponentStyle;
  input: InputComponentStyle;
  badge: BadgeComponentStyle;
  section: SectionComponentStyle;
  page: PageComponentStyle;
}

export type ComponentStyleOverrides = {
  [K in keyof ComponentStyles]?: Partial<ComponentStyles[K]>;
};
