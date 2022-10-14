import { Box, DescriptionAnt, Dropdown, ExameAnt, Painel, Title } from "../../src/components";
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
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: `Paciente`,
        key: '1',
        children: 
        <div>
        <Painel padding = {20} background={"#064663"} color={"#fff"}>
           <DescriptionAnt/>
        </Painel>
        
    </div>
        ,
      },
      {
        label: `Medicação`,
        key: '2',
        children: <Painel padding = {20} background={"#064663"} color={"#fff"}>
        <Box backgroundColor={"#fff"} padding={15}>
            <Typography.Text style={{
                fontSize: 18,
                fontWeight: 700,
            }}>EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography.Text>
            <Typography.Text 
                style={{
                    fontSize: 18,
                    fontWeight: 700,
                }}
            >Frequência</Typography.Text>
            <Typography.Text
                style={{
                    fontSize: 18,
                    fontWeight: 700,
                }}
            >8/8 h</Typography.Text>
        </Box> 
    </Painel>,
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
