import { STextarea } from "./styled";

export default function Textarea({children, ...props} :any){
    return(
        <div>
            <STextarea {...props}>
                {children}
            </STextarea>
        </div>
    )
}