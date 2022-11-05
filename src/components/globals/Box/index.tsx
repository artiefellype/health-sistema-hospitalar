import { SBox } from "./styled";

export default function Box({children, ...props}: any){
    return(
        <SBox {...props}>
            {children}
        </SBox>
    )
}