import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' })

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is missing');
}

export default {
	schema: './server/db/schema/*',
	out: './server/db/migrations',
	driver: 'pg',
	verbose: true,
	dbCredentials: {
		connectionString: process.env.DATABASE_URL,
	},
} satisfies Config;
