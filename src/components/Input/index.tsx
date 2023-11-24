interface IInputProps{
    placeholder:string,
    onChange: ( value: string) => void;
    className:string
    }
    export const Input:React.FC<IInputProps>=({placeholder, onChange,className}):JSX.Element=>{
      return(
      
   
        <input placeholder={placeholder} name="link" type="text" id="large-input" className={`w-full p-6 text-gray-900 rounded-3xl  sm:text-md  focus:border-blue-500  ${className}`} onChange={(e)=>onChange(e.target.value)}/>
      
          )
    }