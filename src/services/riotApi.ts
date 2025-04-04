import axios from 'axios';
import type { Champion, Item } from '../types/tft';

const RIOT_API_KEY = import.meta.env.RIOT_API_KEY;
const BASE_URL = 'https://americas.api.riotgames.com/tft';
const DDragon_URL = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US';
const DDragon_IMG_URL = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/img';

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
            icon: `${DDragon_IMG_URL}/tft-champion/${champion.image.full}` // URL de la imagen
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ahri.png"
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Kaisa.png"
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png"
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Lux.png"
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Malzahar.png"
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Kassadin.png"
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Soraka.png"
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Jinx.png"
            },
            {
                id: "TFT9_Ekko",
                name: "Ekko",
                cost: 3,
                traits: ["Pulsefire", "Rogue"],
                ability: {
                    name: "Parallel Convergence",
                    description: "Crea un campo que aturde a los enemigos"
                },
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ekko.png"
            },
            {
                id: "TFT9_Senna",
                name: "Senna",
                cost: 1,
                traits: ["Redeemer", "Gunner"],
                ability: {
                    name: "Piercing Darkness",
                    description: "Dispara un rayo que daña y cura"
                },
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Senna.png"
            },
            {
                id: "TFT9_Garen",
                name: "Garen",
                cost: 1,
                traits: ["Demacia", "Vanguard"],
                ability: {
                    name: "Judgement",
                    description: "Gira y daña a los enemigos cercanos"
                },
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Garen.png"
            },
            {
                id: "TFT9_Irelia",
                name: "Irelia",
                cost: 3,
                traits: ["Ionia", "Blade Master"],
                ability: {
                    name: "Bladesurge",
                    description: "Salta al enemigo y lo daña"
                },
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Irelia.png"
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
            icon: `${DDragon_IMG_URL}/tft-item/${item.image.full}` // URL de la imagen
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
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"
            },
            {
                id: "2",
                name: "Recurve Bow",
                description: "+10% Attack Speed",
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1043.png"
            },
            {
                id: "3",
                name: "Needlessly Large Rod",
                description: "+10 Ability Power",
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1058.png"
            },
            {
                id: "4",
                name: "Tear of the Goddess",
                description: "+15 Mana",
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/3070.png"
            },
            {
                id: "5",
                name: "Chain Vest",
                description: "+20 Armor",
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1031.png"
            },
            {
                id: "6",
                name: "Negatron Cloak",
                description: "+20 Magic Resist",
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1057.png"
            },
            {
                id: "7",
                name: "Giant's Belt",
                description: "+150 Health",
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1011.png"
            },
            {
                id: "8",
                name: "Spatula",
                description: "Componente especial para crear items únicos",
                icon: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/3311.png"
            }
        ];
        
        return mockItems;
    }
} 