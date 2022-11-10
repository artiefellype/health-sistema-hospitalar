import styled from 'styled-components';
import { Span } from '../../../types/types'; 

export const SSpan = styled.span<Span>`
    display: ${(Span) => Span.display || 'flex'};
    position: ${(Span) => Span.position || 'relative'};
    color: ${(Span) =>Span.color || '#f5f5f5'};
    width: ${(Span) => Span.width || `90%`};
    height: ${(Span) => Span.height || `auto`};
    border: ${(Span) => Span.border || `1px solid rgba(255,255,255, 0.25)`};
    border-radius: ${(Span) => Span.borderRadius || '5px'};
    font-size: ${(Span) => Span.fontSize || '1em'};
    font-weight: ${(Span) => Span.fontWeight || '600'};
    background: ${(Span) => Span.background || '#e7e4e4'};
    border-bottom: ${(Span) => Span.borderBottom || `1px solid #ffffff`};
    padding: ${(Span) => Span.padding || '10px'};
    padding-bottom: ${(Span) =>Span.paddingBottom};
    padding-top: ${(Span) =>Span.paddingTop};
    padding-left: ${(Span) =>Span.paddingLeft};
    padding-right: ${(Span) =>Span.paddingRight};
    margin: ${(Span) => Span.margin || '10px 0px'};
    margin-top: ${(Span) =>Span.marginTop};
    margin-bottom: ${(Span) =>Span.marginBottom};
    margin-left: ${(Span) =>Span.marginLeft};
    margin-right: ${(Span) =>Span.marginRight};
    pointer-events: none;
    text-transform: uppercase;
/* 
    display: flex;
    position: relative;
    pointer-events: none;
    font-size: 1em;
    font-weight: 600;
    color: #f5f5f5;
    text-transform: uppercase; */
 
`;
