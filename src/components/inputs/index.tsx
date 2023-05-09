interface InputProps{
    type?:string , 
    className?: string , 
    placeholder?: string,
}
const Input: React.FC<InputProps> = ({
type , 
className ,
placeholder ,
}) => {
  return (
    <>
    <input 
    type={type} 
    className={`
    border-[2px]
    py-3
    px-6 
    hover:scale-110
    transition 
    duration-300 
    ease-in-out
    ${className}`} placeholder={placeholder} />
    </>
  )
}

export default Input ;

export const InputSecondary: React.FC<InputProps> = ({
  type , 
  className ,
  placeholder ,
  }) => {
    return (
      <>
      <input 
      type={type} 
      className={`
      border-[2px]
      py-3
      px-6 
  
      ${className}`} placeholder={placeholder} />
      </>
    )
  }
  