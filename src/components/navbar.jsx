'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useSession, signOut } from 'next-auth/react';
//import { Button } from '@nextui-org/react';
import { Button, Layout, Menu, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import './Components.css';

import {
  HomeOutLined,
  AppstoreAddOutlined,
  AreaChartOutlined,
  UserOutlined,
  SettingOutlined,
  BarsOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import ToggleThemeButton from './ToggleThemeButton';

export default function Navbar() {
  const { data: session } = useSession();
  const { Header, Sider } = Layout;
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <Layout
        className={`${darkTheme === false ? ' bg-gray-100' : ' bg-slate-800'}`}
      >
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className="sidebar"
        >
          <div className="logo">
            <div
              className={darkTheme ? 'logo-dark' : 'logo-light text-yellow-600'}
            >
              SEG
            </div>
          </div>
          <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode="inline"
            className={`menu-bar ${
              darkTheme === false ? 'text-red-700' : 'text-slate-300'
            }`}
          >
            <Menu.Item key="mPrincipal" icon={<HomeOutLined />}>
              Menu Principal
            </Menu.Item>
            <Menu.Item key="actividades" icon={<AppstoreAddOutlined />}>
              Actividades{' '}
            </Menu.Item>
            <Menu.SubMenu
              key="tasks"
              icon={<BarsOutlined />}
              title="Pendientes"
            >
              <Menu.Item key="task-1">Urgentes</Menu.Item>
              <Menu.Item key="task-2">Secundarios</Menu.Item>
              <Menu.SubMenu key="subtasks" title="Otros">
                <Menu.Item key="subtask-1">Denegados</Menu.Item>
                <Menu.Item key="subtask-2">Aceptados</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key="reportes" icon={<AreaChartOutlined />}>
              Reportes{' '}
            </Menu.Item>
            <Menu.Item key="usuarios" icon={<UserOutlined />}>
              Usuarios{' '}
            </Menu.Item>
            <Menu.Item key="configuracion" icon={<SettingOutlined />}>
              Configuración{' '}
            </Menu.Item>
          </Menu>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout
          className={` h-16${
            darkTheme === false ? 'text-zinc-800' : '  text-slate-200'
          }`}
        >
          <Header
            className={`${
              darkTheme === false ? 'bg-white' : ' bg-slate-900 text-slate-300'
            }`}
            style={{
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              type="text"
              className={`toggle upside ${
                darkTheme === false ? 'text-yellow-700' : 'text-slate-300'
              }`}
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />

            <div className="flex gap-x-2 items-center">
              <Link href={'/panel'}> Panel </Link>
              <p>
                {session.user.name} {session.user.email}
              </p>
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={60}
                height={60}
                alt="user-image"
                referrerPolicy="no-referrer"
              />

              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: '/',
                  })
                }
                className="bg-slate-900 text-white px-6 py-2 rounded-md"
              >
                Cerrar Sesion
              </Button>
            </div>
          </Header>
          <h1>Hello</h1>
        </Layout>
      </Layout>
    </div>
  );
}
