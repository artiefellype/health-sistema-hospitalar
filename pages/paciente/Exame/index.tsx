import { Typography } from "antd";
import { GetServerSideProps } from "next";
import { Box, ExameAnt, Painel, Title } from "../../../src/components";
import Home from "../../../src/components/Home";
import { parseCookies } from 'nookies'

export default function Exame(){
    return(
        <Home>
            <div>
            <Title color= {"#064663"}>
                Exames
            </Title>
            <ExameAnt/>
        </div>
        </Home>
        
    )
}

// VERIFICACAO DE TOKENS VIA SERVER-SIDE
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