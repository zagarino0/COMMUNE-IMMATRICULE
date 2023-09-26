import * as React from "react";
interface LabelProps {
    text?: string ;
    className?:string ;
}
export const Label : React.FC<LabelProps> =({
    text ,
    className
})=> {
    return(
        <div className={`font-semibold text-sm ${className}`}>
{text}
        </div>
    )
} 