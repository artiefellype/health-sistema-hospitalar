import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR,STDIcon,STHIcon } from "./styles";
import Link from "next/link";
import { Item, Icon} from '../../types/types';
interface props {
    items?: Item[];
    icons?: Icon[];
}
function Table({items, icons}:props){
    return (
        <STable>
            <STHead>
                <STHeadTR>
                    <STH>Id</STH>
                    <STH>Nome</STH>
                    <STH>Data de Entrada</STH>
                    <STH>Status</STH>
                    {icons?.map((icon) => (
                        <STHIcon key={icon.id}></STHIcon>
                    ))}
                </STHeadTR>
            </STHead>
            <STBody>
                {items?.map((item) => (
                    <STBodyTR key={item.id}>
                        <STD>{item.id}</STD>
                        <STD>{item.nome}</STD>
                        <STD>{item.dataEntrada}</STD>
                        <STD>{item.status}</STD>
                        {icons?.map((icon) => (
                            <STDIcon key={icon.id}>
                                <Link href= {icon.url} >
                                    <icon.icon/>
                                </Link>
                            </STDIcon>
                        ))}
                    </STBodyTR>
                ))}
            </STBody>
        </STable>
    );
};

export default Table;