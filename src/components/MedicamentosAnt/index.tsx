import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {GiMedicines} from 'react-icons/gi';

interface Remedio {
  nome: string;
  descricao: string;
  frequencia: string;
  data_inicio: string;
}

const MedicamentosAnt: React.FC = () => {
  const list = [
    {
      nome: 'Remedio 1',
      descricao: 'Descrição do Remedio 1',
      frequencia: '08/08h',
      data_inicio: '22/08/2021',
    },
    {
      nome: 'Remedio 2',
      descricao: 'Descrição do Remedio 2',
      frequencia: '12/12h',
      data_inicio: '30/08/2021',
    },
    {
      nome: 'Remedio 3',
      descricao: 'Descrição do Remedio 3',
      frequencia: '6/6h',
      data_inicio: '22/10/2021',
    },
  ];

    return (
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={list}
          renderItem={item => (
            <List.Item
              actions={[item.frequencia, item.data_inicio]}
            >
              
                <List.Item.Meta
                  avatar={<GiMedicines/>}
                  title={<a>{item.nome}</a>}
                  description={item.descricao}
                />
                <div>Frequência</div>
              
            </List.Item>
          )}
        />
      );
    };
export default MedicamentosAnt;