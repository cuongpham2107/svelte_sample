import prisma from "$lib/server/prisma";
import { redirect, type Actions } from "@sveltejs/kit";
import { z } from "zod";
import bcrypt  from "bcryptjs";

import { lucia } from "$lib/server/auth";

const loginSchema = z.object({
    email: z.string({
        required_error: "Email không được để trống",
    }).email({
        message: "Email không hợp lệ"
    }).max(64,{
        message: "Email không được quá 64 ký tự"
    }),
    password: z.string({
        required_error: "Password không được để trống"
    }).min(6,{
        message: "Password phải có ít nhất 6 ký tự"
    })
});

export const actions: Actions = { 
    
            login: async ({request,cookies,locals}) => {
                const formData = Object.fromEntries(await request.formData());

                try {
                    const result = loginSchema.parse(formData);
                    
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
                    const session = await lucia.createSession(existingUser.id, {});
                    const sessionCookie = lucia.createSessionCookie(session.id);
                    cookies.set(sessionCookie.name, sessionCookie.value, {
                        path: ".",
                        ...sessionCookie.attributes
                    });
                    
                } catch (error:any) {
                    console.log(error);
                    // const { fieldErrors: errors } = error.flatten();
                   
        			// const { password, ...rest } = formData;
                    
        			// return {
        			// 	data: rest,
        			// 	errors
        			// };
                }

            },
    // login: async ({cookies,locals}) => {
    //     cookies.set('auth','adminusertoken',{
    //         path: '/',
    //         httpOnly: true,
    //         sameSite: 'strict',
    //         secure: process.env.NODE_ENV === 'production',
    //         maxAge: 60 * 60 * 24 * 7
    //     });
        
    //     if(locals.user?.role === 'ADMIN'){
    //         throw redirect(303,'/admin/dashboard');
    //     }
    //     throw redirect(303,'/');
    // }

};