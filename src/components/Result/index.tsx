import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"

interface IResultProps{
    error:string,
    response:string,
    copyLink:()=>void,
    copyStatus:boolean,
    lang:string,
    loading:boolean
}
export const Result:React.FC<IResultProps>=({error,response,copyLink,copyStatus,lang,loading}):JSX.Element=>{
    const {t}=useTranslation()
    return(
        <div dir={`${lang==="fa" && !response ? "rtl":"ltr"}`}
                className={`${
                  error ? "text-errorcolor" :response? "text-secondary-light":"text-[#ACC8E5]"
                } ${loading &&"animate-pulse"} items-center p-4 mt-8  sm:rounded-2xl rounded-xl flex justify-between shadow-lg shadow-black-500/20 backdrop-blur h-[68px] text-m bg-[#1e293b] bg-opacity-60 `}
                style={{borderWidth:0.3,borderColor:"light"}}
              >
                <p className={`font-normal tracking-wide`}>
                  {response
                    ? response
                    : error
                    ? t(error)
                    : t("result")}
                </p>
                {!error && response ? (
                  <div
                    onClick={copyLink}
                    className="cursor-pointer text-light flex justify-end items-center font-normal w-1/6"
                  >
                    <span className="pr-2 ">
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