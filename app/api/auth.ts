import { supabase } from "@/lib/supabase";
import axios from "axios";
import { apiUrl } from "@/config";

const googleauth = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
    } catch (error) {
        console.error(error)
    }
}

const sendAccesstoken = async (accessToken: string)=>{

    try {
        await axios.post(
            `${apiUrl}/api/v1/auth/callback`,{},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
            }
        );
    } catch (error) {
        console.log(error);
    }
}

export { googleauth,sendAccesstoken }