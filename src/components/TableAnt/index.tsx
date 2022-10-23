
import { Table } from 'antd';
import { IconType }from 'react-icons'
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import Title from '../Title';
import { IoQrCode } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import Link from 'next/link';
import QRCode from 'qrcode';
import axios from 'axios';
import Image from 'next/image';

interface DataType {
    key: React.Key;
    Id: string;
    Nome?: string;
    DataEntrada:string;
    Status: string;
    Acoes: string;
}

interface Person {
    name:{
        first: string;
        last: string;
    }
    email: string;
    picture: {
        thumbnail: string;
    }
    nationality: string;
    registered: {
        date: string;
    }
}

const count = 7;


export default function App() {

    useEffect(() => {
      const article = { 
        username: 'indexe@email.com',
        password: 'testinho',
      };
      axios.post('https://localhost:3000/auth/login', article)
        .then(response => console.log(response.data)).catch(error => console.log("@>>", error))
    });

    return (
        <div>ALO</div>
    )

    
    // const [list, setList] = useState<Person[]>([]);
    // useEffect(() => {
    //     fetch(fakeDataUrl)
    //       .then(res => res.json())
    //       .then(res => {
    //         setList(res.results);
    //         console.log(res.results);
    //       });
    //   }, []);
    // const [open, setOpen] = useState(false);
    
    // const data: DataType[] = [
        

    // ];
    // list.map((item, index) => {
    //     data.push({
    //         key: index,
    //         Id: index +1+"",
    //         Nome: item.name.first + " " + item.name.last,
    //         DataEntrada: item.registered.date,
    //         Status: "Ativo",
    //         Acoes: "Ações"
    //     });
    // });
    
//     const columns: ColumnsType<DataType> = [
//         {
//             title: 'Id',
//             dataIndex: 'Id',
//         },
//         {
//             title: 'Nome',
//             dataIndex: 'Nome',
//         },
//         {
//             title: 'Data de Entrada',
//             dataIndex: 'DataEntrada',
//         },
//         {
//             title: 'Status',
//             dataIndex: 'Status',
//         },
//         {
//             title: 'Ações',
//             dataIndex: 'Acoes',
//             render: () => (
//                 <>
//                     <button 
//                         style={{
//                             border: 'none', 
//                             backgroundColor: 'transparent', 
//                             cursor: 'pointer',
//                             marginRight: '10px',
                            

//                     }}
//                         onClick={() => 
//                             setOpen(!open)}
//                             onBlur={()=>setOpen(false)}
//                             >
//                         <IoQrCode/>
//                     </button>
//                     <Link href="/cadastrarPacientes">
//                     <a style={
//                             {
//                                 color: '#000',
//                                 fontSize: '1rem',
//                                 paddingLeft: '0.5rem'
//                             }
//                         }><AiFillEdit/></a>
//                     </Link>  
//                 </>
//             ),
//         },
//     ];
// const [src,setSrc] = useState('');
//     useEffect(() => {
//         QRCode.toDataURL('https://health-sistema-hospitalar-vczy.vercel.app/paciente').then((url:any) => {
//             setSrc(url);
//         })
//     }, []);   
//     return(
    
//     <div>
//         <div
//             style={{
//                 display: open ? 'flex' : 'none',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'column',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0,0,0,0.5)',   
//                 zIndex: 9999,  
                            
//             }}
//             >
//             <Image src={src} alt="QRCode" width={200} height={200} />                
            
//         </div>
//         <Title>
//             Pacientes
//         </Title>
//         <Table columns={columns} dataSource={data} size="middle" 
            
//         />
//     </div>

   // )
};