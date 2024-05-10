import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase/client'

export function useIsLogged() {

    const navigate = useNavigate()

    async function checkUser() {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            navigate('/')
        } else {
            navigate('/home')
        }
    }

    async function getInfoUser() {
        const { data: { user } } = await supabase.auth.getUser()
        return user
    }

    return {
        checkUser,
        getInfoUser
    }
}
