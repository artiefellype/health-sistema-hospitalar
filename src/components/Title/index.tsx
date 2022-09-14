import {H1} from './styles';
export default function Title({children, TitleH1}: any){
    return(
        <H1 color={TitleH1?.color} font={TitleH1?.font} margin={TitleH1?.margin} padding={TitleH1?.padding} >
            {children}
        </H1>
    )
}