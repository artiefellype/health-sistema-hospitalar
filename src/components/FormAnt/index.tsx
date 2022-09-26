
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';
import Link from 'next/link';
import Box from '../Box';
import Painel from '../Painel';
const { TextArea } = Input;

const FormAnt = () => {
    return (
        <>
            <Painel background={"#064663"} padding={15}>
                <Form
                    labelCol={{ span: 4 }}
                    layout="horizontal"
                    style={{
                        width: '98%',
                        backgroundColor: '#064663',
                    }}
                >
                    <Form.Item>
                        <Input placeholder="Nome do paciente" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Nome da mãe" />
                    </Form.Item>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',


                    }}>
                        <Form.Item style={{
                            width: "130px",
                        }}>
                            <Select placeholder="Prioridade">
                                <Select.Option value="baixo">Baixo</Select.Option>

                                <Select.Option value="medio">Medio</Select.Option>

                                <Select.Option value="alto">Alto</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <InputNumber placeholder="Idade" />
                        </Form.Item>
                        <Form.Item>
                            <DatePicker placeholder="Data" />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <TextArea placeholder="Principais Sintomas" rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <TextArea placeholder="Admissão" rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <TextArea placeholder="APP(antecedentes pessoais patologicos) Ex: HAS, DM2, Hipotiroidismo, medicação psiquiatricas" rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <TextArea placeholder="Dieta" rows={2} />
                    </Form.Item>
                    <Box justifyContent={"space-around"}>
                        <Form.Item>
                            <Button type="primary">
                                <Link href="/pacientes">
                                    Cadastrar Paciente
                                </Link>
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">
                                <Link href="/pacientes">
                                    <a>Voltar</a>
                                </Link>
                            </Button>
                        </Form.Item>
                    </Box>
                </Form>
            </Painel>
        </>
    );
};

export default () => <FormAnt />;
