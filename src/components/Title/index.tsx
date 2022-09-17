import {H1} from './styles';
export default function Title({children, ...props}: any){
    return(
        <H1 {...props} >
            {children}
        </H1>
    )
}