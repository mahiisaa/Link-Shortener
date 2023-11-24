interface IInputProps{
    placeholder:string,
    onChange: ( value: string) => void;
    className:string
    }
    export const Input:React.FC<IInputProps>=({placeholder, onChange,className}):JSX.Element=>{
      return(
        <div className=" w-3/4">
        {/* <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label> */}
        <input placeholder={placeholder} name="link" type="text" id="large-input" className={`w-full p-6 text-gray-900 rounded-3xl  sm:text-md  focus:border-blue-500 ${className}`} onChange={(e)=>onChange(e.target.value)}/>
        </div>
          )
    }