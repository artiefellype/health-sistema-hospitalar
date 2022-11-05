import { SButton } from "./styled";

export default function Button({children, ...props} :any){
    return(
        <div>
            <SButton {...props}>
                {children}
            </SButton>
        </div>
    )
}