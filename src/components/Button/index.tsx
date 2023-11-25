import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IButtonProps{
text:string,
onClick:(e: React.MouseEvent<HTMLButtonElement>) => void;
className?:string
isLoading?:boolean
}
export const Button:React.FC<IButtonProps>=({text,onClick,className,isLoading}):JSX.Element=>{
  return(
    <button className={`bg-secondary hover:bg-secondary-light text-light font-bold sm:p-4 p-2  sm:rounded-2xl rounded-xl outline-none flex justify-center h-[68px] items-center  ${className}`} onClick={onClick}>
    {text}
    {isLoading &&<div className="w-[24px] h-[24px]"><FontAwesomeIcon icon={faSpinner}  className="spinner"/></div>}
  </button>
      )
}