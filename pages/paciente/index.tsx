import { Box, DescriptionAnt, Dropdown, ExameAnt, MedicamentosAnt, Painel, Title } from "../../src/components";
import {IoMdArrowDropdown} from "react-icons/io";
import { useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import { Tabs } from 'antd';
import React from 'react';
import Typography from "antd/lib/typography";

const onChange = (key: string) => {
  console.log(key);
};

const Paciente: React.FC = () => (
  <Tabs
    type="card"
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: `Paciente`,
        key: '1',
        children: 
        <div>
        
           <DescriptionAnt/>        
    </div>
        ,
      },
      {
        label: `Medicação`,
        key: '2',
        children: 
        <MedicamentosAnt/>,
      },
      {
        label: `Exames`,
        key: '3',
        children: <ExameAnt/>,
      },
    ]}
  />
);
export default Paciente;
