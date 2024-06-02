// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
const bcrypt = require("bcryptjs");
const users = [
    {
        name: 'Alice',
        email: 'alice@gmail.com',
        password: 'password',
        role: 'USER'
    },
    {
        name: 'User',
        email: 'user@gmail.com',
        password: 'password',
        role: 'USER'
    },
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'password',
        role: 'ADMIN'
    }
]

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
    for (const u of users) {
        const user = await prisma.user.create({
            data: {
                name: u.name,
                email: u.email,
                password: await bcrypt.hash(u.password, 10),
                role: u.role
            }
        })
        console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })