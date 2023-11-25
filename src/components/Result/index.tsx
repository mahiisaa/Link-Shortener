import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"

interface IResultProps{
    error:string,
    response:string,
    copyLink:()=>void,
    copyStatus:boolean
}
export const Result:React.FC<IResultProps>=({error,response,copyLink,copyStatus}):JSX.Element=>{
    const {t}=useTranslation()
    return(
        <div
                className={`${
                  error ? "bg-errorcolor/20" : "bg-light/10"
                } bg-opacity-20 items-center p-4 mt-8  sm:rounded-2xl rounded-xl flex justify-between shadow-lg shadow-black-500/20 backdrop-blur border-2 border-light h-[68px] text-base text-m `}
              >
                <p className={`text-[#c1c1c1] font-normal tracking-wide`}>
                  {response
                    ? response
                    : error
                    ? error
                    : t("result")}
                </p>
                {!error && response ? (
                  <div
                    onClick={copyLink}
                    className="cursor-pointer text-light flex justify-end items-center font-normal w-1/6"
                  >
                    <span className="pr-2">
                      {copyStatus ? t("copied") : t("copy")}
                    </span>
                    {copyStatus ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faCopy} />
                    )}
                  </div>
                ) : null}
              </div>
    )
}