import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const session = cookies.get("session");
    return {
        session
    };
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData();
        const session = formData.get("session");
        if (session) {
            const expires=new Date(new Date().getTime() + 1000*60*60*24*30);
            cookies.set("session", session.toString(), {
                secure: true,
                expires,
                
            });
            return {
                success: true,
            };
        }
        return {
            success: false,
        };
    },
};