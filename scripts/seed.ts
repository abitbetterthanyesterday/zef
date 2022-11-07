import { db } from 'api/src/lib/db'

import { hashPassword } from '@redwoodjs/api'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //

    console.log(
      "\nSeeding database\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    const users = [
      { username: 'admin', email: 'admin@test.com', password: 'test' },
    ]
    for (const user of users) {
      const [hashedPassword, salt] = hashPassword(user.password)
      await db.user.create({
        data: {
          username: user.username,
          email: user.email,
          hashedPassword,
          salt,
        },
      })
		console.log(`Created user ${user.username}`)
    }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
