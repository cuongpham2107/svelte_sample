import  db  from "$lib/database/prisma";

export const getUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email
        }
    });
    return user;
}
export const getUserByToken = async (token: string) => {
    const user = await db.user.findUnique({
        where: {
            token
        }
    });
    return user;
}
export const createUser = async (data: {name: string, email: string, password: string, role: string}) => {
    const user = await db.user.create({
        data
    });
    return user;
}

export const updateUser = async (id: number, data: {name: string, email: string, password: string, role: string}) => {
    const user = await db.user.update({
        where: {
            id
        },
        data
    });
    return user;
}
