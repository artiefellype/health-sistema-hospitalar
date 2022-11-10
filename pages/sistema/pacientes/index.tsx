import { GetServerSideProps } from "next";
import { PacientesPage } from "../../../src/components";
import { parseCookies } from 'nookies'


export default function Pacientes() {
  return (
    <PacientesPage />
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