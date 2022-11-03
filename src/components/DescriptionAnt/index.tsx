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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Descriptions.Item>
  </Descriptions>
);

export default App;