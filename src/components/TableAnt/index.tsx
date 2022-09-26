
import { Table } from 'antd';
import { IconType }from 'react-icons'
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import Title from '../Title';
import { IoQrCode } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import Link from 'next/link';

interface DataType {
    key: React.Key;
    Id: string;
    Nome: string;
    DataEntrada: string;
    Status: string;
    Acoes: string;
}

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
                <Link href={"/paciente/"}>
                    <a style={
                        {
                            color: '#000',
                            fontSize: '1rem',
                            paddingLeft: '0.5rem'
                        }
                    }><IoQrCode/></a>
                </Link>
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
const App: React.FC = () => (
    <div>
        <Title>
            Pacientes
        </Title>
        <Table columns={columns} dataSource={data} size="middle" 
            
        />
    </div>
);
export default App;