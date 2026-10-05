export interface StyleCatalogItem {
    id: string;
    name: string;
    category: 'Modern' | 'Expressive' | 'Material & Depth' | 'Retro & Heritage' | 'Artistic & Organic';
    status: 'active' | 'upcoming';
    tagline: string;
    description: string;
    accentColor: string;
    previewGradient: string;
    features: string[];
}
export declare const ALL_29_STYLES: StyleCatalogItem[];
