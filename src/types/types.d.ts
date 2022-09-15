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
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: number;
    fontSize?: number;
    color?: string;
    colorBorder?: string;
    background?: string;
    placeholderColor?: string;
    paddingBottom?: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}

// Painel
export interface Painel{
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    background?: string;
    borderRadius?: number;
    boxShadow?: string;
    
}

// Menu items
export interface MenuItems {
    id?: string;
    name: string;
    icon: IconType;
    url: string;
}

