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
}

export interface Item {
    id: string;
    name: string;
    description: string;
    icon: string;
} 