import { SForm } from "./styled";

export default function Form({children, ...props}: any){
    return(
        <div>
            <SForm {...props}>
                {children}
            </SForm>
        </div>
    )
}