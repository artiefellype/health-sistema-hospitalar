import { GetServerSideProps } from "next";
import { Title,Prontuario } from "../../../src/components";
import { parseCookies } from 'nookies';

export default function CadastrarProntuario() {
  


  return (
    
      <div>
        <Title color={"#064663"}>Cadastrar Prontuários</Title>
        <Prontuario />
      </div>
    
  );
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