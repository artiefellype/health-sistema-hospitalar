import { MainPainel } from "./styles";

function Painel({children, ...props}: any){
    return (
        <MainPainel>
            {children}
        </MainPainel>
    );
};

export default Painel;