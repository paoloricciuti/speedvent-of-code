import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
export const GET: RequestHandler = async ({ cookies }) => {
    const session = cookies.get("session");
    if (!session) {
        throw error(401);
    }
    const headers = new Headers();
    headers.set("cookie", `session=${session}`);
    headers.set("user-agent", "ricciutipaolo@gmail.com");
    headers.set("content-type", "text/plain");
    const today = new Date();
    let input: string;
    try {
        input = await fetch(`https://adventofcode.com/${today.getFullYear()}/day/${today.getDate()}/input`, {
            headers,
        }).then(res => {
            if (!res.ok) {
                throw new Error();
            }
            return res.text();
        }) as string;
    } catch (e) {
        throw error(500);
    }
    return new Response(input);
};
