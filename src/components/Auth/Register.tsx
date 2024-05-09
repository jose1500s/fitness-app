import { useState } from 'react';
import { Steps, Input, Space, Button, InputNumber } from 'antd';
import { Link } from "react-router-dom"

import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  GoogleOutlined,
  XOutlined,
  MailOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

export default function Register() {

  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const items = [
    {
      title: 'Datos de acceso',
      description: 'Para poder acceder a la aplicación necesitas un nombre de usuario y contraseña.',
    },
    {
      title: 'Información personal',
      description: 'Metricas personales para poder calcular diversas métricas de tu cuerpo.',
    },
  ];

  //todo, funcion que guarde los datos del primer form
  const nextStep = () => {
    setCurrent(current + 1);
  }

  // todo, funcion que mande los datos del primer y segundo form a la base de datos
  const handleSubmit = () => {
    console.log('enviando datos...');
  }

  return (
    <div className='w-2/3 md:w-1/3'>
      <Steps
        current={current}
        onChange={onChange}
        items={items}
        type='navigation'
      />
      {
        current === 0 ? (
          <div className='w-full h-auto'>
            <form className="flex flex-col justify-center mt-4  mx-auto  text-white z-20">
              <Input
                placeholder="Nombre"
                size="large"
                type='text'
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              />

              <Input
                className='mt-4'
                placeholder="Correo"
                size="large"
                type='email'
                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              />

              <Space direction="vertical" className="mt-4">
                <Input.Password
                  size="large"
                  placeholder="Ingresa tu contraseña"
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Space>

              <Space direction="vertical" className="mt-4">
                <Input.Password
                  size="large"
                  placeholder="Confirma tu contraseña"
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Space>

              <Button
                type="primary"
                block
                className="flex justify-center items-center mt-4 font-bold"
                size="large"
                onClick={nextStep}
              >
                Continuar <ArrowRightOutlined />
              </Button>
              
            </form>
            <div className="relative mt-5 text-center">
              <p className="text-white">¿Ya tienes una cuenta?</p>
              <Link to="/" className="text-[#1785D6] font-bold hover:text-[#4d82b4]">Inicia Sesión</Link>
            </div>
          </div>
        ) : (
          <div className='w-full h-auto'>
            <form action="" className="flex flex-col justify-center mt-4 text-white z-20">
              <label htmlFor="peso" className='text-white text-lg'>Peso</label>
              <InputNumber
                className='w-full mt-2'
                size="large"
                min={1}
                max={300}
                defaultValue={0}
                name='peso'
                id='peso'
              />

              <label htmlFor="altura" className='text-white text-lg mt-4'>Altura (Centimetros)</label>
              <InputNumber
                className='w-full mt-2'
                size="large"
                min={1}
                max={300}
                defaultValue={0}
                name='altura'
                id='altura'
              />

              <label htmlFor="edad" className='text-white text-lg mt-4'>Edad</label>
              <InputNumber
                className='w-full mt-2'
                size="large"
                min={1}
                max={300}
                defaultValue={0}
                name='edad'
                id='edad'
              />

              <Button type="primary" block className="mt-4 font-bold" size="large"
                onClick={handleSubmit}
              >
                Registrarse
              </Button>
            </form>
            <div className="relative mt-5 text-center">
              <p className="text-white">¿Ya tienes una cuenta?</p>
              <Link to="/" className="text-[#1785D6] font-bold hover:text-[#4d82b4]">Inicia Sesión</Link>
            </div>
          </div>
        )

      }
    </div>
  )
}
