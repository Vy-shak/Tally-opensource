import { supabase } from "@/lib/supabase";

const googleauth = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
    } catch (error) {
        console.error(error)
    }
}

export {googleauth}