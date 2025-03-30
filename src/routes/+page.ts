// @ts-ignore
export const load = async ({ fetch }) => {
    const todosResponse = await fetch("/api/todo");
    const todos = await todosResponse.json();
   
    return {
     todos,
    };
};