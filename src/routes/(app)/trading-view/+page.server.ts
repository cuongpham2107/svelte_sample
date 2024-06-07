import type { PageServerLoad } from './$types';
import { env } from "$env/dynamic/private";

export const load = (async () => {
    const start = 1;
    const limit = 100;
    const time_period = '24h';
    const convert = 'USD';
    // const convert_id = 2781;
    let trending_coins  = null;
    try {
        trending_coins = await fetch(`${env.URl_API_COIN_MARKET_CAP}/v1/cryptocurrency/trending/latest?start=${start}&limit=${limit}&time_period=${time_period}&convert=${convert}`, {
            headers: {
                'X-CMC_PRO_API_KEY': env.API_COIN_MARKETCAP,
                'Accept': 'application/json',
            }
        });
    } catch (error) {
        console.log(error)
    }
    if(trending_coins) {
        trending_coins = await trending_coins.json();
        console.log(trending_coins.data)
    }
    // console.log(trending_coins)
    return {};
}) satisfies PageServerLoad;