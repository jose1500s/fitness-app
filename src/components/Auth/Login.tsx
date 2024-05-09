import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import { Link } from "react-router-dom"

export default function BackgroundBeamsDemo() {


  return (
    <>
      <form action="" className="flex flex-col justify-center max-w-2xl w-1/3 mx-auto p-4 text-white z-20">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar sesión</h2>
        <Input
          placeholder="Nombre de usuario / Correo"
          size="large"
          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        />

        <Space direction="vertical" className="mt-4">
          <Input.Password
            size="large"
            placeholder="Ingresa tu contraseña"
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Space>

        <Button type="primary" block className="mt-4 font-bold" size="large">
          Iniciar sesión
        </Button>

      </form>
      <div className="relative mt-5 bottom-4 w-full text-center">
        <p className="text-white">¿Aún no tienes cuenta?</p>
        <Link to="register" className="text-[#1785D6] font-bold hover:text-[#4d82b4]">Regístrate</Link>
      </div>
    </>
  );
}
