import {H1} from './styles';
import { TitleH1 } from '../../types/types';

export default function Title({children, ...props}: any){
    return(
        <H1 color={props?.color} font={props?.font} margin={props?.margin} padding={props?.padding} >
            {children}
        </H1>
    )
}