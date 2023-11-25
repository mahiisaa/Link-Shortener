interface IHeaderProps{
    lang:boolean,
    changeLang:()=>void
}
export const Header:React.FC<IHeaderProps>=({lang,changeLang}):JSX.Element=>{
    return(
        <header className="flex justify-between items-center py-10 font-bold  text-light z-10">
            <div className="text-l tracking-wide" >
              <span className="text-secondary font-black">W</span>e<span className="text-accent2 font-black sm">W</span>ink
            </div>
            <div className="bg-[#ffffff] bg-opacity-10 sm:px-3 sm:py-4 py-3 px-2 sm:rounded-2xl rounded-xl flex cursor-pointer backdrop-blur" onClick={changeLang}>
               <div></div><span className="px-2">EN</span> | <span className="px-2">FA</span>
             </div>
        
         </header>
    )
}