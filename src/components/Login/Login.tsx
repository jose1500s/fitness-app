import { BackgroundBeams } from "./background-beams.tsx";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  GoogleOutlined,
  XOutlined,
} from '@ant-design/icons';
import { Input, Space, Button } from 'antd';

export default function BackgroundBeamsDemo() {

  return (
    <div className="h-full w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#1785D6] to-[#00BCF8]  text-center font-sans font-bold">
          Manten el control de tus calorias
        </h1>
        <p></p>
        <p className="text-[#FFF2FE] max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          Bienvenido a <span className="font-bold italic">DCApp</span>, la aplicación que te permite llevar el control de tus calorias diarias.
        </p>
      </div>
      <BackgroundBeams />
      <form action="" className="flex flex-col justify-center max-w-2xl w-1/3 mx-auto p-4 text-white z-20">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar sesión</h2>
        <Input
          placeholder="Nombre de usuario"
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
        <p className="text-center mt-2 text-base">O inicia sesión con</p>
        <div className="flex justify-center mt-2">
          <Button type="primary" shape="circle" className="mr-2" icon={<GoogleOutlined />} />
          <Button type="primary" shape="circle" className="mr-2" icon={<XOutlined />} />
        </div>
      </form>
      <div className="absolute bottom-4 w-full text-center">
        <p className="text-white">¿Aún no tienes cuenta?</p>
        <a href="#" className="text-[#1785D6] font-bold hover:text-[#4d82b4]">Regístrate</a>
      </div>
    </div>
  );
}
