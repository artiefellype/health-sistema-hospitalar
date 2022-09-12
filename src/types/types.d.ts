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