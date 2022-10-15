import { Badge, Descriptions } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Descriptions layout="vertical" bordered>
    <Descriptions.Item label="Nome">João Gomes dos Santos</Descriptions.Item>
    <Descriptions.Item label="Nome da Mãe">Capitu Gomes dos Santos</Descriptions.Item>
    <Descriptions.Item label="Status">
      <Badge status="processing" text="Ativo" />
    </Descriptions.Item>
    <Descriptions.Item label="Data de Admissão">20/10/2022</Descriptions.Item>
    <Descriptions.Item label="Email" span={2}>
      walterzinho@gmail.com
    </Descriptions.Item>
    <Descriptions.Item label="Telefone">(84) 99103-6182</Descriptions.Item>
    <Descriptions.Item label="Dieta" span={2}>Indefinido</Descriptions.Item>
    <Descriptions.Item label="Diagnostico:">
      Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.

      Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!.

    </Descriptions.Item>
  </Descriptions>
);

export default App;