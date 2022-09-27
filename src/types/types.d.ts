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
    fontSize?: number;
}

// Input
export interface Input{
    padding?: number;
    margin?: number;
    width?: string;
    height?: string;
    border?: string;
    borderBottom?: string;
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
    filter?: string;
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

// Button
export interface Button{
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
    paddingBottom?: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    fontFamily?: string;
}

// Label
export interface Label{
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
    paddingBottom?: number;
    paddingTop?: number;
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    justifyContent?: string; 
}

// Form
export interface Form{
    width?: string;
    maxWidth?: string;
    padding?: string;
    backgroundColor?: string;
    borderRadius?: number;
    boxShadow?: string;
    boxSizing?: string;
    margin?: number;
}    

// Textarea
export interface Textarea{
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: number;
    padding?: string;
    margin?: string;
    resize?: string;
    fontSize?: number;
    fontFamily?: string;
    color?: string;
    outline?: string;
    background?: string;
}

// Box
export interface Box{
    width?: string;
    height?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    padding?: string;
    margin?: string;
    background?: string;
    backgroundColor?: string;
    borderRadius?: number;
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}
