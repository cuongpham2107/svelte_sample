import { lucia } from "$lib/server/auth";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get(lucia.sessionCookieName);
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

    const { session, user } = await lucia.validateSession(sessionId);

    console.log(session, user);
    // event.locals.user = authenticateUser(event);

    // if(event.url.pathname.startsWith("/admin")){
    //     if(!event.locals.user){
    //        throw redirect(303, ('/login'))
    //     }
    //     if(event.locals.user.role !== "ADMIN"){
    //         throw redirect(303, ('/'))
    //     }
    // }

  

    const response = await resolve(event);

    return response;
}