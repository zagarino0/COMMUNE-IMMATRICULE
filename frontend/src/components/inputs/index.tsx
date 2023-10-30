
interface InputProps{
    type?:string , 
    className?: string , 
    placeholder?: string,
    value?:string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
type , 
className ,
placeholder ,
value,
onChange
}) => {
  return (
    <>
    <input 
    type={type} 
    value={value}
    onChange={onChange}
    className={`
    border-[3px]
    
    py-3
    px-6 
   hover:bg-gray-200
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
  