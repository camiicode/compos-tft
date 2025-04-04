export interface Champion {
    id: string;
    name: string;
    cost: number;
    traits: string[];
    ability: {
        name: string;
        description: string;
    };
    icon: string;
    level?: number; // Nivel del campeón (1-3)
    items?: Item[]; // Items equipados
}

export interface Item {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export interface BoardCell {
    id: string;
    champion: Champion | null;
    position: {
        row: number;
        col: number;
    };
} 