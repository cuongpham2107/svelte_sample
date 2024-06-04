import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        title: 'Orders',
    };
}) satisfies PageServerLoad;