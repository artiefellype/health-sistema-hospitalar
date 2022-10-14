
import { Table } from 'antd';
import { IconType }from 'react-icons'
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import Title from '../Title';
import { IoQrCode } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import Link from 'next/link';
import QRCode from 'qrcode';

interface DataType {
    key: React.Key;
    Id: string;
    Nome: string;
    DataEntrada: string;
    Status: string;
    Acoes: string;
}


const data: DataType[] = [
    {
        key: '1',
        Id: '1',
        Nome: 'João',
        DataEntrada: '01/01/2021',
        Status: 'Ativo',
        Acoes: '',
    },
    {
        key: '2',
        Id: '2',
        Nome: 'Maria',
        DataEntrada: '01/01/2021',
        Status: 'Ativo',
        Acoes: '',
    },
    {
        key: '3',
        Id: '3',
        Nome: 'José',
        DataEntrada: '01/01/2021',
        Status: 'Ativo',
        Acoes: '',
    },
];


export default function App() {
    const [open, setOpen] = useState(false);
    const columns: ColumnsType<DataType> = [
        {
            title: 'Id',
            dataIndex: 'Id',
        },
        {
            title: 'Nome',
            dataIndex: 'Nome',
        },
        {
            title: 'Data de Entrada',
            dataIndex: 'DataEntrada',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
        },
        {
            title: 'Ações',
            dataIndex: 'Acoes',
            render: () => (
                <>
                    <button style={
                            {
                                color: '#000',
                                fontSize: '1rem',
                                paddingLeft: '0.5rem'
                            }
                        }
                        onClick={() => 
                            setOpen(!open)}
                            onBlur={()=>setOpen(false)}
                            >
                        <IoQrCode size={20} />
                    </button>
                    <Link href="/cadastrarPacientes">
                    <a style={
                            {
                                color: '#000',
                                fontSize: '1rem',
                                paddingLeft: '0.5rem'
                            }
                        }><AiFillEdit/></a>
                    </Link>  
                </>
            ),
        },
    ];
const [src,setSrc] = useState('');
    useEffect(() => {
        QRCode.toDataURL('https://health-sistema-hospitalar-vczy.vercel.app/paciente').then((url:any) => {
            setSrc(url);
        })
    }, []);   
    return(
    
    <div>
        <div
            style={{
                display: open ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',   
                zIndex: 9999,  
                            
            }}
            >
            <img src={src} alt="QRCode"
                style={
                    {
                        width: '350px',
                        height: '350px',
                        background: '#fff',                                               
                    }
                }
                
            />
        </div>
        <Title>
            Pacientes
        </Title>
        <Table columns={columns} dataSource={data} size="middle" 
            
        />
    </div>

    )};