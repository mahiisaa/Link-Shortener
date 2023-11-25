interface IHeaderProps{
    lang:string;
}
export const Header:React.FC<IHeaderProps>=({lang}):JSX.Element=>{
    return(
        <header className="flex justify-between items-center py-10 font-bold  text-light z-10">
            <div className="sm:text-base text-m tracking-wide">
              <span className="text-secondary font-black">W</span>e<span className="text-accent2 font-black sm">W</span>ink
            </div>
            <div className="bg-[#ffffff] bg-opacity-10 sm:px-4 sm:py-6 py-3 px-2 sm:rounded-3xl rounded-2xl flex cursor-pointer ">
               <div></div><span className="px-2">EN</span> | <span className="px-2">FA</span>
             </div>
        
         </header>
    )
}