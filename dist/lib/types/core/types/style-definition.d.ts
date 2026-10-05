import { DesignTokens } from './tokens';
import { ComponentStyles } from './components';
export interface StyleMetadata {
    version: string;
    author?: string;
    tags?: string[];
    category?: string;
    isBase?: boolean;
}
export interface StyleDefinition {
    id: string;
    name: string;
    description: string;
    tokens: DesignTokens;
    components: ComponentStyles;
    metadata: StyleMetadata;
    compositionConfig?: any;
}
