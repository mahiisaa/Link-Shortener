export const Header:React.FC=():JSX.Element=>{
    return(
        <header className="flex justify-between items-center py-10 font-bold  text-[#fefefe]">
            <div className="text-base tracking-wide" >
              <span className="text-secondary font-black">W</span>e<span className="text-accent font-black">W</span>ink
            </div>
            <div className="bg-[#ffffff] bg-opacity-10 px-4 py-6 rounded-3xl flex cursor-pointer ">
               <span className="px-2">EN</span> | <span className="px-2">FA</span>
             </div>
        
         </header>
    )
}