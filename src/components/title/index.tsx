import * as React from "react";

interface TitleProps {
    text?: string;
    className?: string;


}

export const  TitleH1 : React.FC<TitleProps> =({
    text,
    className,
})=> {
  return (
    <div
    className={`text-3xl font-semibold ${className}`}
    >{text}</div>
  )
}

export const  TitleH2 : React.FC<TitleProps> =({
    text,
    className,
})=> {
  return (
    <div
    className={`text-2xl font-semibold ${className}`}
    >{text}</div>
  )
}

export const  TitleH3 : React.FC<TitleProps> =({
    text,
    className,
})=> {
  return (
    <div
    className={`text-xl font-semibold ${className}`}
    >{text}</div>
  )
}



