import axios from "axios";
import { createContext, useEffect } from "react";
import { setCookie } from 'nookies';
import Router from 'next/router';
import { api } from "../../pages/api/api";

interface AuthContextData {
  isAuth: boolean;
  signIn: (data: SignInData) => Promise<void>;
}

interface SignInData {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: any) {
  const isAuth = false;

  async function signIn({email, password}: SignInData) {
    
      const article = {
        username: email,
        password: password,
      };
      axios
        .post("http://localhost:3000/auth/login", article)
        .then((response) => {
            console.log(response.data)
            let token = response.data.access_token;
            setCookie(undefined, 'health.token', token, {
                maxAge: 60 * 60, // 1 hora de sessao apos logado
            });

            // Atualizando novos tokens gerados nos headers enviados pelo axios
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            //Redirecionando utilizando router do next
            Router.push('/dashboard');
        })
        .catch((error) => console.log("ERROR@>>", error));
    
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn }}>{children}</AuthContext.Provider>
  );
}
