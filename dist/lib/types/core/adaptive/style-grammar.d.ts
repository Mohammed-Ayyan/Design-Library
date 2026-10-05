import { StyleDesignGrammar } from './types';
/**
 * Registry of expressive design grammars for each design language.
 *
 * Rather than mapping a style directly to a single rigid page template,
 * a design grammar defines aesthetic weights, density biases, asymmetry tendencies,
 * container philosophies, and typography scales that are synthesized
 * with the detected ContentContext to art-direct the layout.
 */
export declare class StyleGrammarRegistry {
    private static grammars;
    /**
     * Retrieves the design grammar for a given style ID.
     * Safely falls back to minimalism-like base grammar if unknown.
     */
    static getGrammar(styleId: string): StyleDesignGrammar;
    /**
     * Registers or updates a design grammar.
     */
    static registerGrammar(grammar: StyleDesignGrammar): void;
}
