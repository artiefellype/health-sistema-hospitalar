import { SFieldset } from "./styled";

export default function Fieldset({children, ...props}: any){
    return(
        <div>
            <SFieldset {...props}>
                {children}
            </SFieldset>
        </div>
    )
}