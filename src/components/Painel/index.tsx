import { MainPainel } from "./styles";

function Painel({children, ...props}: any){
    return (
        <MainPainel {...props} >
            {children}
        </MainPainel>
    );
};

export default Painel;