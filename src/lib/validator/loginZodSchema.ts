import { z } from "zod";

export const loginSchema = z.object({
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