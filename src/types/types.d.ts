import { IconType } from "react-icons/lib";

// Table
export interface Item{ 
    id: string;
    nome: string;
    dataEntrada: string;
    status: string;
}
export interface Icon{
    id: string;
    label: string;
    icon: IconType;
    url: string;
}


// Title
export interface TitleH1{
    color?: string
    font?: string;
    margin?: number;
    padding?: number;
}

// Input
export interface Input{
    id?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    padding?: number;
    margin?: number;
    width?: number;
    height?: number;
    border?: string;
    borderRadius?: number;
    fontSize?: number;
    color?: string;
    background?: string;
    placeholderColor?: string;
}

// Menu items
export interface MenuItems {
    id?: string;
    name: string;
    icon: IconType;
    url: string;
}


