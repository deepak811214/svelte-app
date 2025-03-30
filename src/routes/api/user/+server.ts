import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async function ({ platform }) {
 // @ts-ignore
 const queryResult = await platform?.env.DATABASE.prepare('SELECT * FROM users LIMIT 5').run();

 return json(queryResult);
};

export const POST: RequestHandler = async function ({ request, platform }) {
    const { email, password } = await request.json();
    const createdAt = new Date().toISOString();
   console.log( email, password)
    try {
     // @ts-ignore
     await platform?.env.DATABASE.prepare(
      'INSERT INTO users (id, email, password, created_at) VALUES (NULL, ?, ?, ?)'
     )
      .bind(email, password, createdAt)
      .run();
   
     return json({
      success: true
     });
    } catch {
     return new Response('Internal Error, User not created', {
      status: 500
     });
    }
   };