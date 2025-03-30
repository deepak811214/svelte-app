// @ts-ignore
export const load = async ({ fetch }) => {
    const usersResponse = await fetch("/api/user");
    const users = await usersResponse.json();
   
    return {
     users,
    };
};