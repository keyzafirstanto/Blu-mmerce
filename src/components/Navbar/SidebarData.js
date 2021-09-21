import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/team',
    icon: <IoIcons5.IoMailOpenOutline />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/setting',
    icon: <IoIcons5.IoLockClosedOutline />,
    cName: 'nav-text',
  },
  {
    title: 'Login | Register',
    path: '/login',
    icon: <IoIcons5.IoPersonOutline />,
    cName: 'nav-text',
  },
];
