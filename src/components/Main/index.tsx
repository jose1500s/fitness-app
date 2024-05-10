import { useEffect } from "react"
import { useIsLogged } from '../Hooks/useIsLogged.ts'
import { toast } from 'sonner'

export default function index() {

  const { checkUser, getInfoUser } = useIsLogged()
  const user = getInfoUser()

  useEffect(() => {
    toast.success('Bienvenido', {
      position: 'top-center',
    })
    console.log('USUARIO: ', user)
    checkUser()
  }, [])

  return (
    <div>
      <h1 className="text-center text-3xl text-indigo-500 italic">Bienvenido a DCApp</h1>

    </div>
  )
}
