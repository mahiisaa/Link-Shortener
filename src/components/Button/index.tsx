import loading from "./../../assets/icons/loading.png"
interface IButtonProps{
text:string,
onClick:(e: React.MouseEvent<HTMLButtonElement>) => void;
className?:string
isLoading?:boolean
}
export const Button:React.FC<IButtonProps>=({text,onClick,className,isLoading}):JSX.Element=>{
  return(
    <button className={`bg-secondary hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-3xl outline-none flex justify-center ${className}`} onClick={onClick}>
    {text}
    {isLoading &&<div className="w-[24px] h-[24px]"><img src={loading}/></div>}
  </button>
      )
}