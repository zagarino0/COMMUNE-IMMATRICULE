import * as React from "react"

interface CardProps{
className?:string,
contentCard?: React.ReactElement,
}
export const Card : React.FC<CardProps>  =({
className,
contentCard,
})=> {
  return (
    <div
    className={`
    bg-white
    rounded-md
    py-1
    shadow-xl
    ${className}
    `}
    >
{contentCard}
    </div>
  )
}

