import prisma from "$lib/database/prisma";
import { redirect, type Actions } from "@sveltejs/kit";
import { loginSchema } from "$lib/validator/loginZodSchema";
import bcrypt  from "bcryptjs";

import { lucia } from "$lib/server/lucia";
import type { PageServerData } from "./$types";

export const load : PageServerData = async (event: { locals: { user: { role: string; }; }; }) => {
    if(event.locals.user && event.locals.user.role === "ADMIN")
    {
        return redirect(302, "/admin/dashboard");
    }
    if(event.locals.user && event.locals.user.role === "USER")
    {
        return redirect(302, "/");
    }
}
export const actions: Actions = { 
    login: async (event) => {
        const formData = Object.fromEntries(await event.request.formData()); // Parse form data
        try {
            const result = loginSchema.parse(formData);// Validate form data
            
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: result.email
                }
            });
            
            
            if(!existingUser){
                return {
                    errors: {
                        message: "Email không tồn tại"
                    }
                };
            }
            const passwordMatch = await bcrypt.compare(result.password, existingUser.password);
            if(!passwordMatch){
                return {
                    errors: {
                        message: "Mật khẩu không đúng"
                    }
                };
            }
            
            const session = await lucia.createSession(existingUser.id, {}); //Tạo session mới cho user 
            const sessionCookie = lucia.createSessionCookie(session.id); // Tạo session cookie từ session id mới tạo 
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: '.',
                ...sessionCookie.attributes
            }); // Set cookie mới vào event cookies để cập nhật session mới nhất cho user
            // return redirect(302, "/");
            
        } catch (error:any) {
            
            const { fieldErrors: errors } = error.flatten();
            
            const { password, ...rest } = formData;
            
            return {
                data: rest,
                errors
            };
        }
        return redirect(302, "/");
    },
};