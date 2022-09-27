import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const NavItems: MenuItem[] = [
  getItem(<Link href="/dashboard">Dashboard</Link>, "4", <PieChartOutlined />),
  getItem(<Link href="/pacientes">Pacientes</Link>, "3", <DesktopOutlined />),
  getItem(<Link href="/pacientes">Exames</Link>, "2", <UserOutlined />),
  getItem(<Link href="/pacientes">Historico</Link>, "1", <TeamOutlined />),
];

export default NavItems;
