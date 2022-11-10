import { StaticImageData } from "next/image";
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
    fontStyle?: string;
    fontWeight?: number;
    paddingBottom?: number;
}

// Input
export interface Input{
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    fontSize?: number;
    color?: string;
    colorBorder?: string;
    background?: string;
    placeholderColor?: string;
    paddingBottom?: string;
    paddingTop?: string;
    paddingLeft?: string;
    paddingRight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    filter?: string;
}

// Span

export interface Span{
    display: string;
    position: string;
    color: string;
    fontWeight: string;
    width?: string;
    height?: string;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    fontSize?: number;
    color?: string;
    colorBorder?: string;
    background?: string;
    placeholderColor?: string;
    padding?: string;
    paddingBottom?: string;
    paddingTop?: string;
    paddingLeft?: string;
    paddingRight?: string;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;

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
    minHeight?: string;
    justifyContent: string;
    alignItems: string;
    display: string;
    flexDirection: string;
    
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
    fontWeight?: number;
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

// Login Components
export interface Login{
    imgUrl?: string;
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
    paddingTop?: number;
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

// OBJETO DE PACIENTES 
interface Person {
    name: string;
    address: string;
    allergies: string[];
    birth_date: string;
    bloodType: string;
    cpf: string;
    email: string;
    emergencyContacts: string;
    id: string;
    mother_name: string;
    observation: string;
    rg: string;
    telephone: string;
  }


// DATATYPE PERSON
  interface DataType {
    key: React.Key;
    Id: string;
    Nome?: string;
    DataEntrada: string;
    Acoes: any;
  }

// PRONTUARIO


interface Prontuario {
    id: string;
    status: string;
    qrcode: string;
    observation: string;
    return: boolean;
    paciente: Person;
    symptoms: string;
    medication: Medication[];
    operations: Operations[];
    priority: number
  }

interface Medication {
    name: string;
    value: number;
    userId: string;
    create_at: string;
    frequency: number;
    description: string;
    measurement: string;
    professionalName: string;
  }
  
  interface Operations {
    name: string;
    result: string;
    userId: string;
    professionalName: string;
    dateTimeOfAplication: string;
  }
