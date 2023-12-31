interface IHeaderProps {
  lang: string;
  changeLang: (langName: string) => void;
}
export const Header: React.FC<IHeaderProps> = ({
  lang,
  changeLang,
}): JSX.Element => {
  return (
    <header className="flex justify-between items-center py-10 font-bold  text-light z-10">
      <div className="text-l tracking-wide">
        <span className="text-secondary font-black">W</span>e
        <span className="text-accent2 font-black sm">W</span>ink
      </div>
      <div className="bg-[#ffffff] bg-opacity-10 sm:px-3 sm:pt-4 sm:pb-3 pt-3 pb-2  px-2 sm:rounded-2xl rounded-xl flex backdrop-blur">
        <span className="px-2 flex flex-col justify-between items-center cursor-pointer " onClick={() => changeLang("en")}>
          EN
          <div className={`w-[8px] h-[4px]  bg-accent2 rounded full ${lang==="en"?"block":"hidden"}`}></div>
        </span>
        |{" "}
        <span className="px-2 flex flex-col justify-between items-center cursor-pointer" onClick={() => changeLang("fa")}>
          فا
          <div className={`w-[8px] h-[4px]  bg-accent2 rounded full ${lang==="fa"?"block":"hidden"}`}></div>
        </span>
      </div>
    </header>
  );
};
