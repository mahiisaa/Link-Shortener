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
      <div className="bg-[#ffffff] bg-opacity-10 sm:px-3 sm:py-4 py-3 px-2 sm:rounded-2xl rounded-xl flex cursor-pointer backdrop-blur">
        <span className="px-2 flex flex-col justify-center items-center" onClick={() => changeLang("en")}>
          EN
          <div className={`w-[8px] h-[4px]  bg-accent2 rounded full ${localStorage.getItem("lang")==="en"?"block":"hidden"}`}></div>
        </span>
        |{" "}
        <span className="px-2" onClick={() => changeLang("fa")}>
          فا
          <div className={`w-[8px] h-[4px]  bg-accent2 rounded full ${localStorage.getItem("lang")==="fa"?"block":"hidden"}`}></div>
        </span>
      </div>
    </header>
  );
};
