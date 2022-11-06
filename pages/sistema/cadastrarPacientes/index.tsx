import { GetServerSideProps } from "next";
import { Title,PatientRegistrationPage } from "../../../src/components";
import Home from "../../../src/components/Home";
import { parseCookies } from 'nookies';

export default function CadastrarPacientes() {
  

  return (
    
      <div>
        <Title color={"#064663"}>Cadastrar Pacientes</Title>
        <PatientRegistrationPage />
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