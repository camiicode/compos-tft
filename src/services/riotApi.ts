import axios from 'axios';
import type { Champion, Item } from '../types/tft';

const RIOT_API_KEY = import.meta.env.RIOT_API_KEY;
const BASE_URL = 'https://americas.api.riotgames.com/tft';
const DDragon_URL = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Riot-Token': RIOT_API_KEY
    }
});

export async function getChampions(): Promise<Champion[]> {
    try {
        // Intentamos obtener los campeones de Data Dragon
        const response = await axios.get(`${DDragon_URL}/tft-champion.json`);
        const championsData = response.data.data;
        
        // Transformar los datos al formato que necesitamos
        const champions: Champion[] = Object.values(championsData).map((champion: any) => ({
            id: champion.id,
            name: champion.name,
            cost: champion.tier || 1, // El tier es el costo
            traits: [], // Los traits no vienen en la API, los agregaremos después
            ability: {
                name: "Habilidad",
                description: "Descripción de la habilidad"
            },
            icon: "" // No cargaremos imágenes por ahora
        }));
        
        return champions;
    } catch (error) {
        console.error('Error fetching champions from API:', error);
        
        // Si falla, usamos datos mockeados más completos
        const mockChampions: Champion[] = [
            {
                id: "TFT9_Ahri",
                name: "Ahri",
                cost: 5,
                traits: ["Star Guardian", "Spell-Weaver"],
                ability: {
                    name: "Spirit Rush",
                    description: "Lanza orbes de esencia que dañan a los enemigos"
                },
                icon: ""
            },
            {
                id: "TFT9_Kaisa",
                name: "Kai'Sa",
                cost: 4,
                traits: ["Void", "Challenger"],
                ability: {
                    name: "Killer Instinct",
                    description: "Se lanza hacia el enemigo más lejano"
                },
                icon: ""
            },
            {
                id: "TFT9_Yasuo",
                name: "Yasuo",
                cost: 5,
                traits: ["Challenger", "Slayer"],
                ability: {
                    name: "Last Breath",
                    description: "Daña a los enemigos en línea"
                },
                icon: ""
            },
            {
                id: "TFT9_Lux",
                name: "Lux",
                cost: 3,
                traits: ["Star Guardian", "Spell-Weaver"],
                ability: {
                    name: "Final Spark",
                    description: "Lanza un rayo de luz que daña a los enemigos"
                },
                icon: ""
            },
            {
                id: "TFT9_Malzahar",
                name: "Malzahar",
                cost: 2,
                traits: ["Void", "Spell-Weaver"],
                ability: {
                    name: "Nether Grasp",
                    description: "Suprime a un enemigo y le daña"
                },
                icon: ""
            },
            {
                id: "TFT9_Kassadin",
                name: "Kassadin",
                cost: 1,
                traits: ["Void", "Slayer"],
                ability: {
                    name: "Force Pulse",
                    description: "Daña a los enemigos cercanos"
                },
                icon: ""
            },
            {
                id: "TFT9_Soraka",
                name: "Soraka",
                cost: 2,
                traits: ["Star Guardian", "Mystic"],
                ability: {
                    name: "Wish",
                    description: "Cura a los aliados con menos vida"
                },
                icon: ""
            },
            {
                id: "TFT9_Jinx",
                name: "Jinx",
                cost: 4,
                traits: ["Challenger", "Gunner"],
                ability: {
                    name: "Get Excited!",
                    description: "Gana velocidad de ataque al derrotar enemigos"
                },
                icon: ""
            }
        ];
        
        return mockChampions;
    }
}

export async function getItems(): Promise<Item[]> {
    try {
        // Intentamos obtener los items de Data Dragon
        const response = await axios.get(`${DDragon_URL}/tft-item.json`);
        const itemsData = response.data.data;
        
        // Transformar los datos al formato que necesitamos
        const items: Item[] = Object.values(itemsData).map((item: any) => ({
            id: item.id,
            name: item.name,
            description: "Descripción del item",
            icon: "" // No cargaremos imágenes por ahora
        }));
        
        return items;
    } catch (error) {
        console.error('Error fetching items from API:', error);
        
        // Si falla, usamos datos mockeados más completos
        const mockItems: Item[] = [
            {
                id: "1",
                name: "B.F. Sword",
                description: "+10 Attack Damage",
                icon: ""
            },
            {
                id: "2",
                name: "Recurve Bow",
                description: "+10% Attack Speed",
                icon: ""
            },
            {
                id: "3",
                name: "Needlessly Large Rod",
                description: "+10 Ability Power",
                icon: ""
            },
            {
                id: "4",
                name: "Tear of the Goddess",
                description: "+15 Mana",
                icon: ""
            },
            {
                id: "5",
                name: "Chain Vest",
                description: "+20 Armor",
                icon: ""
            },
            {
                id: "6",
                name: "Negatron Cloak",
                description: "+20 Magic Resist",
                icon: ""
            },
            {
                id: "7",
                name: "Giant's Belt",
                description: "+150 Health",
                icon: ""
            },
            {
                id: "8",
                name: "Spatula",
                description: "Componente especial para crear items únicos",
                icon: ""
            }
        ];
        
        return mockItems;
    }
} 