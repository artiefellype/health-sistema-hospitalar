import { Descriptions, Select } from 'antd';
import { Form, Typography } from 'antd';
import Box from '../Box';
const { Title } = Typography;
const DescriptionAnt = () => (
  <>
    <Title level={5} style={
      {
        color: '#fff',

      }
    }>Nome: João Gomes dos Santos</Title>
    <Title level={5} style={
      {
        color: '#fff',

      }
    }>Nome da  Mãe: Capitu Gomes dos Santos</Title>
    <Box>
    <Title level={5} style={
        {
          color: '#fff',
        }
      }>Data de Admissão: 20/10/2022</Title>
      <Title level={5} style={
      {
        color: '#fff',
      }
    }>Email: walterzinho@gmail.com</Title>
    </Box>
    <Box >
      
      <Title level={5} style={
        {
          color: '#fff',
        }
      }>Status: Ativo</Title>
      <Title level={5} style={
        {
          color: '#fff',
        }
      }>Telefone: (84) 99103-6182</Title>
      <Title level={5} style={
        {
          color: '#fff',
        }
      }>Prioridade: <Select defaultValue="Baixa" style={{ width: 120 }}>
          <Select.Option value="Baixa">Baixa</Select.Option>
          <Select.Option value="Média">Média</Select.Option>
          <Select.Option value="Alta">Alta</Select.Option>
        </Select></Title>
      
    </Box>
    <Title level={5} style={
      {
        color: '#fff',
      }
    }>Diagnostico: Indefinido</Title>
    <Title level={5} style={
      {
        color: '#fff',
      }
    }>Dieta: DIETA LÍQUIDA COMPLETA</Title>
  </>
);

export default DescriptionAnt;