import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Custom Products',
    path: '/customproducts',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Categories',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Obat Generic',
        path: '/obat',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Antibiotic',
        path: '/obat',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Multivitamin',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Obat Kecantikan',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Antiseptik',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Obat Lambung',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Sort By',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'A-Z',
        path: '/obat',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Z-A',
        path: '/obat',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Lowest-Highest Price',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Highest-Lowes Price',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
