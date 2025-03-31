import { error, json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async function ({ request, platform }) {
    const { email, password } = await request.json();
    try {
    // @ts-ignore
        const queryResult = await platform?.env.DATABASE.prepare(`SELECT password FROM users where email = '${email}'`).run();
        const queryResultPassword = queryResult.results[0]?.password
            if(!queryResultPassword){
                return json({error: 'User does not exist, Please register'}, {
                    status: 401
                });
            }
            if ( password === queryResultPassword) {  
                return json({ success: true });
            } else {
                return json({error: 'Email or Password is incorrect, Please try again'}, {
                    status: 401
                });
            }
    } catch {
        return new Response('Internal Error', {
            status: 500
        });
    }
};