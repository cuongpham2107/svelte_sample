import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({cookies}) => {
    cookies.delete('session', { path: '/' });
    throw redirect(303, '/login');
};

// Xóa cookie bằng cách đặt giá trị của nó thành một chuỗi trống và đặt ngày hết hạn trong quá khứ.

// Bạn phải chỉ định một đường dẫn cho cookie.Trong hầu hết các trường hợp, bạn nên đặt đường dẫn rõ ràng: '/'
// Để làm cho cookie có sẵn trong suốt ứng dụng của bạn.Bạn có thể sử dụng đường dẫn tương đối hoặc đặt đường dẫn: ''
// để làm cho cookie chỉ có sẵn trên con đường hiện tại và con cái của nó


// import { redirect } from 'sveltekit-flash-message/server';
// import { lucia } from '$lib/server/lucia';
// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async () => {
// 	// ...
// };
// export const actions = {
// 	default: async (event) => {
// 		if (!event.locals.user) redirect(302, '/auth/sign-in');
// 		if (event.locals.session) {
// 			await lucia.invalidateSession(event.locals.session.id);
// 			const sessionCookie = lucia.createBlankSessionCookie();
// 			event.cookies.set(sessionCookie.name, sessionCookie.value, {
// 				path: '.',
// 				...sessionCookie.attributes
// 			});
// 			const message = { type: 'success', message: 'Logged out' } as const;
// 			redirect(302, '/auth/sign-in', message, event.cookies);
// 		}
// 		redirect(302, '/auth/sign-in');
// 	}
// };
