import { Lucia, TimeSpan } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import db from "$lib/database/prisma";
import { dev } from "$app/environment";

const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        name: "session",
        expires: true,
        attributes: {
            secure: !dev
        }
    },// Tên cookie session 
    sessionExpiresIn: new TimeSpan(30, 'd'), // 30 days
    getUserAttributes: (attributes) => {
        return {
            id: attributes.id,
			provider: attributes.provider,
			providerId: attributes.providerId,
			email: attributes.email,
			firstName: attributes.firstName,
			lastName: attributes.lastName,
			role: attributes.role,
			verified: attributes.verified,
			receiveEmail: attributes.receiveEmail,
			token: attributes.token
        };
    }// Lấy thông tin user từ session attributes 

});
declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}// Ghi đè module lucia để sử dụng trong ứng dụng
}
interface DatabaseUserAttributes {
	id: string;
	provider: string;
	providerId: string;
	email: string;
	firstName: string;
	lastName: string;
	role: string;
	verified: boolean;
	receiveEmail: boolean;
	token: string;
}// Khai báo interface DatabaseUserAttributes để sử dụng trong ứng dụng