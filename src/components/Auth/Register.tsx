import { useState, useEffect } from 'react';
import { Steps, Input, Space, Button, InputNumber } from 'antd';
import { Link } from "react-router-dom"
import { supabase } from '../../supabase/client';

import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

export default function Register() {

  const [current, setCurrent] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [edad, setEdad] = useState(0);

  const onChange = (value: number) => {
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

  const nextStep = () => {
    setCurrent(current + 1);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: 'example@email.com',
          password: 'example-password',
          options: {
            emailRedirectTo: 'http://localhost:5173/home'
          }
        }
      )
      console.log(data, error)
    } catch (error) {
      console.log('Error al registrar', error)
    }


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
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <Input
                className='mt-4'
                placeholder="Correo"
                size="large"
                type='email'
                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <Space direction="vertical" className="mt-4">
                <Input.Password
                  size="large"
                  placeholder="Ingresa tu contraseña"
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Space>

              <Space direction="vertical" className="mt-4">
                <Input.Password
                  size="large"
                  placeholder="Confirma tu contraseña"
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
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
            <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-4 text-white z-20">
              <label htmlFor="peso" className='text-white text-lg'>Peso</label>
              <InputNumber
                className='w-full mt-2'
                size="large"
                min={1}
                max={300}
                defaultValue={0}
                name='peso'
                id='peso'
                onChange={(value) => setPeso(value ?? 0)}
                value={peso}
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
                onChange={(value) => setAltura(value ?? 0)}
                value={altura}
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
                onChange={(value) => setEdad(value ?? 0)}
                value={edad}
              />

              <Button
                type="primary"
                block
                className="mt-4 font-bold"
                size="large"
                htmlType='submit'
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
