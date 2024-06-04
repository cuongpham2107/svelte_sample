import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
            title: 'Customers',
        
    };
}) satisfies PageServerLoad;