import { useEffect } from "react"
import { supabase } from '../../supabase/client.ts';
import { useNavigate } from "react-router-dom"

export default function index() {
  const navigate = useNavigate()

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      navigate('/')
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <div>
      <h1 className="text-center text-3xl text-indigo-500 italic">Bienvenido a DCApp</h1>
    </div>
  )
}
