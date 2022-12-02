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
            cookies.set("session", session.toString(), {
                secure: true,
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