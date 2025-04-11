import axios from 'axios';
import type { Champion, Item } from '../types/tft';

const COMMUNITY_DRAGON_URL = 'https://raw.communitydragon.org/latest/cdragon/tft/es_mx.json';
const CDRAGON_BASE_URL = 'https://raw.communitydragon.org/latest/game';
const CDRAGON_IMAGES_URL = 'https://raw.communitydragon.org/latest/cdragon/tft';
const DDragon_IMG_URL = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img';

export async function getChampions(): Promise<Champion[]> {
    try {
        console.log('Obteniendo campeones de Community Dragon...');
        const response = await axios.get(COMMUNITY_DRAGON_URL);
        const data = response.data;
        
        // Obtener el primer set de datos (set actual)
        const currentSet = data.setData[0];
        const championsData = currentSet.champions;
        
        console.log(`Encontrados ${championsData.length} campeones en el set actual`);
        
        // Log para ver la estructura de un campeón
        if (championsData.length > 0) {
            console.log('Estructura de un campeón:', JSON.stringify(championsData[0], null, 2));
        }
        
        // Transformar los datos al formato que necesitamos
        const champions: Champion[] = championsData.map((champion: any) => {
            // Construir la URL del icono de manera segura
            let iconUrl = '';
            
            // Intentar diferentes formatos de URL
            if (champion.image && champion.image.full) {
                console.log(`Campeón ${champion.name} tiene propiedad image.full:`, champion.image.full);
                iconUrl = `${DDragon_IMG_URL}/champion/${champion.image.full}`;
            } else if (champion.icon) {
                console.log(`Campeón ${champion.name} tiene propiedad icon:`, champion.icon);
                iconUrl = champion.icon.replace('/lol-game-data/assets/v1/champions/', `${CDRAGON_BASE_URL}/assets/v1/champions/`);
            } else {
                // URL por defecto si no hay icono
                console.log(`Campeón ${champion.name} no tiene propiedad de imagen, usando URL por defecto`);
                iconUrl = `${DDragon_IMG_URL}/champion/${champion.id}.png`;
            }
            
            console.log(`URL final para ${champion.name}: ${iconUrl}`);
            
            return {
                id: champion.id,
                name: champion.name,
                cost: champion.cost,
                traits: champion.traits,
                ability: {
                    name: champion.ability.name,
                    description: champion.ability.desc
                },
                icon: iconUrl
            };
        });
        
        console.log('Campeones procesados correctamente');
        return champions;
    } catch (error) {
        console.error('Error al obtener campeones de Community Dragon:', error);
        throw error;
    }
}

export async function getItems(): Promise<Item[]> {
    try {
        console.log('Obteniendo items de Community Dragon...');
        const response = await axios.get(COMMUNITY_DRAGON_URL);
        const data = response.data;
        
        // Obtener el primer set de datos (set actual)
        const currentSet = data.setData[0];
        const itemsData = currentSet.items;
        
        console.log(`Encontrados ${itemsData.length} items en el set actual`);
        
        // Log para ver la estructura de un item
        if (itemsData.length > 0) {
            console.log('Estructura de un item:', JSON.stringify(itemsData[0], null, 2));
        }
        
        // Transformar los datos al formato que necesitamos
        const items: Item[] = itemsData.map((item: any) => {
            // Construir la URL del icono de manera segura
            let iconUrl = '';
            
            // Intentar diferentes formatos de URL
            if (item.image && item.image.full) {
                console.log(`Item ${item.name} tiene propiedad image.full:`, item.image.full);
                iconUrl = `${DDragon_IMG_URL}/item/${item.image.full}`;
            } else if (item.icon) {
                console.log(`Item ${item.name} tiene propiedad icon:`, item.icon);
                iconUrl = item.icon.replace('/lol-game-data/assets/v1/items/', `${CDRAGON_BASE_URL}/assets/v1/items/`);
            } else {
                // URL por defecto si no hay icono
                console.log(`Item ${item.name} no tiene propiedad de imagen, usando URL por defecto`);
                iconUrl = `${DDragon_IMG_URL}/item/${item.id}.png`;
            }
            
            console.log(`URL final para ${item.name}: ${iconUrl}`);
            
            return {
                id: item.id,
                name: item.name,
                description: item.desc,
                icon: iconUrl
            };
        });
        
        console.log('Items procesados correctamente');
        return items;
    } catch (error) {
        console.error('Error al obtener items de Community Dragon:', error);
        throw error;
    }
} 