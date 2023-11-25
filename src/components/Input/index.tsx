interface IInputProps{
    placeholder:string,
    onChange: ( value: string) => void;
    className:string
    }
    export const Input:React.FC<IInputProps>=({placeholder, onChange,className}):JSX.Element=>{
      return(
      
   
        <input placeholder={placeholder} name="link" type="text" id="large-input" className={`w-full sm:p-6 p-4 text-gray-900 sm:rounded-3xl rounded-2xl sm:text-md   outline-none bg-[#e5e5e5] ${className}`} onChange={(e)=>onChange(e.target.value)}/>
      
          )
    }