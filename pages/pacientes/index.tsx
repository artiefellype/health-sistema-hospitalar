import { GetServerSideProps } from "next";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { IoQrCode } from "react-icons/io5";
import { TableAnt } from "../../src/components";
import Home from "../../src/components/Home";
import { parseCookies } from 'nookies'


export default function Pacientes() {
  return (
    <Home>
        <TableAnt />
    </Home>
    
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {['health.token']: token } = parseCookies(ctx)
  
    if(!token){
      return{
        redirect:{
          destination:'/',
          permanent: false
        }
      }
    }
    return{
      props:{
  
      }
    }
  }