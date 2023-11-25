import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";
import { AXIOS } from "./config/axios.config";
import { API_URLS } from "./constants/api.urls";
import { Header } from "./components/Header";
import {Wave} from "./components/common/Wave"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [link, setLink] = useState<string>();
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copyStatus, setCopyStatus] = useState<boolean>(false);
  const [language,setLanguage]=useState<string>("EN")

  const fetchLink = async () => {
    setLoading(true);
    try {
      const request = await AXIOS.post(API_URLS.GetLinks, {
        url: link,
      });
     
      setResponse(request.data.short_url);
      setError("")

    } catch (error:any) {
        setResponse("")
      setError(error.response.data.errors.url[0]);
     
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (value: string) => {
    setLink(value);
    setError("")

  };
  const handleClick = () => {
    setCopyStatus(false)
    fetchLink();
  };
  const copyLink = () => {
    navigator.clipboard.writeText(response);
    if (!copyStatus) {
      setCopyStatus(!copyStatus);
    }
  };
  return (
    <div className="w-full bg-brand-primary h-screen flex justify-center relative z-0" >
      <div className="w-5/6 ">
        <Header lang={language} />
        <div className="flex justify-center sm:mt-[22px] mt-[36px]">
          <section className="w-[800px] z-10">
            <h1 className="text-light sm:text-xl text-l font-bold tracking-wide text-center ">
              Make your <span className="text-accent2">Links</span> shorter
              with WeWink
            </h1>
            {/* <h2 className="text-[#fdfefe] text-m font-bold tracking-wide text-center mb-[64px]">
            Small Actions Bring Big Change
            </h2> */}

            <div className="sm:flex sm:flex-row sm:justify-between sm:gap-8 items-center w-full mt-[62px]">
              <Input
                placeholder="https://link.wewink.ir"
                onChange={(value) => handleChange(value)}
                className="text-black font-medium sm:w-5/6"
              />
              <Button
                isLoading={loading ? true : false}
                text={loading ? "Wait" : "Generate"}
                className="sm:w-1/6 w-full text-brand-primary sm:m-0 mt-[24px]"
                onClick={handleClick}
              ></Button>
            </div>
            <div>
              <div className={`${error ? "bg-errorcolor":"bg-accent"} bg-opacity-20 sm:p-6 p-4 mt-8  sm:rounded-3xl rounded-2xl flex justify-between shadow-lg shadow-black-500/20`}>
                <p className={`text-light text-s font-semibold tracking-wide`}>
                {response ? response : error ? error : "get your short link here ..."}
                </p>
                <div
                  onClick={copyLink}
                  className="cursor-pointer text-light flex justify-end items-center font-semibold text-s w-1/6"
                >
                  <span className="pr-2">{copyStatus ? "Copied" : "Copy"}</span>
                  {copyStatus?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faCopy} />}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Wave viewBox={"0 0 1440 320"} fill="accent" fillOpacity={"0.3"}></Wave>
      <Wave viewBox={"0 0 1350 320"} fill="accent" fillOpacity={"0.3"}></Wave>
      {/* <div className="border-8 border-accent rounded-full absolute -top-42 -right-30 w-[980px] h-[980px] z-0"></div> */}
    </div>
  );
}

export default App;
