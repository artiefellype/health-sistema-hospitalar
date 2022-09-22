import { SContent, SDropdown } from "./styled";

export default function Dropdown( {children, ...props}: any) {
    console.log(props);
    return (
        <div>
            <SDropdown {...props}>
                {children}
                <props.icon/>
            </SDropdown>
            {props.open ? 
                <SContent>
                    {props.valor.map((item: any) => (
                        <p key={item.id}>{item.label}</p>
                    ))}
                </SContent>
            : null}
        </div>
        
    )
}