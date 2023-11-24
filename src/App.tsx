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
   // console.log(value);
    // !value && setError("");
  };
  const handleClick = () => {
    setCopyStatus(false)
    fetchLink();
  };
  const copyLink = () => {
    navigator.clipboard.writeText(response);
    setCopyStatus(!copyStatus);
  };
  return (
    <div className="w-full bg-brand-primary h-screen flex justify-center relative z-0" >
      <div className="w-5/6 ">
        <Header />
        <div className="flex justify-center mt-[18px]">
          <section className="w-[800px] z-10">
            <h1 className="text-[#fdfefe] sm:text-xl text-base font-bold tracking-wide text-center mb-[64px]">
              Make your <span className="text-secondary">Links</span> shorter
              with WeWink
            </h1>
            {/* <h2 className="text-[#fdfefe] text-m font-bold tracking-wide text-center mb-[64px]">
            Small Actions Bring Big Change
            </h2> */}

            <div className="sm:flex sm:flex-row sm:justify-between sm:gap-8 items-center w-full mt-[22px]">
              <Input
                placeholder="write your link here"
                onChange={(value) => handleChange(value)}
                className={`${
                  error && "border-2 border-errorcolor text-errorcolor"
                } text-black font-bold sm:w-5/6`}
              />
              <Button
                isLoading={loading ? true : false}
                text={loading ? "wait" : "Submit"}
                className="sm:w-1/5 w-full text-brand-primary sm:m-0 mt-[24px]"
                onClick={handleClick}
              ></Button>
            </div>
            <div>
              <div className={`${error ? "bg-errorcolor":"bg-accent"} bg-opacity-20 p-6 mt-8 rounded-3xl flex justify-between shadow-lg shadow-black-500/20`}>
                <p className={`text-[#ffffff] opacity-90 text-s font-semibold`}>
                  {response ? response :(error?error:"result")}
                </p>
                <div
                  onClick={copyLink}
                  className="cursor-pointer text-[#f1f1f1] flex justify-center items-center font-bold text-s"
                >
                  <span className="pr-2">{copyStatus ? "Copied" : "Copy"}</span>
                  {copyStatus?<FontAwesomeIcon icon={faCheck} />:<FontAwesomeIcon icon={faCopy} />}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Wave viewBox={"0 0 1440 320"} fill="accent" fillOpacity={"0.3"}></Wave>
      <Wave viewBox={"0 0 1350 320"} fill="accent" fillOpacity={"0.3"}></Wave>
      
    </div>
  );
}

export default App;
