import {SH} from './styles';
export default function Title({children, ...props}: any){
    return(
        <SH {...props} >
            {children}
        </SH>
    )
}