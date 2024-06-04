import { lucia } from "$lib/server/lucia";
import { redirect, type Handle } from "@sveltejs/kit";
import type { HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = async ({ error, event }) => {
	const errorId = crypto.randomUUID();

	event.locals.error = error?.toString() || '';
	if (error instanceof Error) {
		event.locals.errorStackTrace = error.stack || '';
	} else {
		event.locals.errorStackTrace = '';
	}
	event.locals.errorId = errorId;
	return {
		message: 'An unexpected error occurred.',
		errorId
	};
};
export const handle: Handle = async ({ event, resolve }) => {
	const startTimer = Date.now();
	event.locals.startTimer = startTimer; // Set startTimer vào locals để sử dụng ở các route khác nhau trong ứng dụng

	const sessionId = event.cookies.get(lucia.sessionCookieName);// Lấy session từ cookie
	const { session, user } = sessionId
		? await lucia.validateSession(sessionId)
		: { session: null, user: null }; // Nếu không có session thì trả về null

	if (session && session.fresh)// Nếu session mới thì cập nhật session
    {
		const sessionCookie = lucia.createSessionCookie(session.id);// Tạo session cookie mới từ session id
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		}); // Set cookie mới vào event cookies để cập nhật session mới nhất cho user
	}
	if (!session)
    {
		const sessionCookie = lucia.createBlankSessionCookie(); // Tạo session cookie mới từ session id rỗng (không có session) 
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});// Set cookie mới vào event cookies để cập nhật session mới nhất cho user
	}
	event.locals.user = user;// Set user vào locals để sử dụng ở các route khác nhau trong ứng dụng 
	event.locals.session = session; // Set session vào locals để sử dụng ở các route khác nhau trong ứng dụng

	// if (event.route.id?.startsWith('/')) {
	// 	if (!user) redirect(304, '/login');
	// 	// if (!user.verified) redirect(302, '/(auth)/verify/email');
	// }
	if (event.route.id?.startsWith('/(admin)')) // Nếu route bắt đầu bằng /admin thì chỉ cho admin truy cập
    {
        if (!user || user?.role === 'USER') redirect(304, '/login');
		if (user?.role !== 'ADMIN') redirect(304, '/login');
	}

	const response = await resolve(event);// Tiếp tục xử lý request sau khi đã xác thực session và user 
	// console.log(response.status, event);
	return response;// Trả về response cho client
};