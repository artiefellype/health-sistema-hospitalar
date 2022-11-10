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
  getItem(<Link href="/sistema/dashboard">Dashboard</Link>, "2", <PieChartOutlined />),
  getItem(<Link href="/sistema/pacientes">Pacientes</Link>, "1", <DesktopOutlined />),
];

export default NavItems;
