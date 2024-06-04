
import { z } from 'zod';

export const registerSchema = z
	.object({
		name: z
			.string({ required_error: 'Tên là bắt buộc' })
			.min(1, { message: 'Tên là bắt buộc' })
			.max(64, { message: 'Tên phải nhỏ hơn 64 ký tự' })
			.trim(),
		email: z
			.string({ required_error: 'Email thì cần thiết' })
			.min(1, { message: 'Email thì cần thiết' })
			.max(64, { message: 'Email phải nhỏ hơn 64 ký tự' })
			.email({ message: 'Email phải là địa chỉ email hợp lệ' }),
		password: z
			.string({ required_error: 'Mật khẩu là bắt buộc' })
			.min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
			.max(32, { message: 'Mật khẩu phải nhỏ hơn 32 ký tự' })
			.trim(),
		passwordConfirm: z
			.string({ required_error: 'Mật khẩu là bắt buộc' })
			.min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
			.max(32, { message: 'Mật khẩu phải nhỏ hơn 32 ký tự' })
			.trim(),
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Mật khẩu và xác nhận mật khẩu phải khớp',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Mật khẩu và xác nhận mật khẩu phải khớp',
				path: ['passwordConfirm']
			});
		}
	});