import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState, useTransition } from "react";
import { AXIOS } from "./config/axios.config";
import { API_URLS } from "./constants/api.urls";
import { Header } from "./components/Header";
import { Wave } from "./components/common/Wave";
import { Result } from "./components/Result";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const [link, setLink] = useState<string>();
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copyStatus, setCopyStatus] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

  const {t}=useTranslation()
  const fetchLink = async () => {
    setLoading(true);
    try {
      const request = await AXIOS.post(API_URLS.GetLinks, {
        url: link,
      });

      setResponse(request.data.short_url);
      setError("");
    } catch (error: any) {
      setResponse("");
      setError(error.response.data.errors.url[0]);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (value: string) => {
    setLink(value);
    setError("");
  };
  const handleClick = () => {
    setCopyStatus(false);
    if (!loading) {
      fetchLink();
    }
  };
  const copyLink = () => {
    navigator.clipboard.writeText(response);
    if (!copyStatus) {
      setCopyStatus(!copyStatus);
    }
  };
  const changeLang = (lan:string) => {
   // const lan=language?"fa":"en"
    i18n.changeLanguage(lan);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setLanguage(lan);
    localStorage.setItem("lang", lan);
}
  return (
    <div className="w-full bg-gradient-to-bl from-brand-primary-dark to-brand-primary h-screen flex justify-center relative z-0 ">
      <div className="w-5/6 z-10">
        <Header lang={language} changeLang={changeLang} />
        <div className="flex justify-center sm:mt-[22px] mt-[36px]">
          <section className="w-[800px] z-10">
            <h1 className="text-light sm:text-xl text-l sm:font-bold font-semibold tracking-wide text-center ">
              {t("heroText1")} <span className="text-secondary">{t("link")}</span> {t("heroText2")}
            </h1>
            <h2 className="text-[#ACC8E5] sm:text-m text-s tracking-wide font-thin text-center sm:mb-[64px] mb-[22px] sm:mt-[20px] mt-[12px] ">
              {t("slogan")}
            </h2>

            <div className="sm:flex sm:flex-row sm:justify-between sm:gap-8 items-center w-full ">
              <Input
                placeholder="https://link.wewink.ir"
                onChange={(value) => handleChange(value)}
                className="text-black font-medium sm:w-5/6"
              />
              <Button
                isLoading={loading}
                text={loading ? t("wait") : t("generate")}
                className="sm:w-1/6 w-full sm:m-0 mt-8"
                onClick={handleClick}
              ></Button>
            </div>
            <div>
              <Result error={error} response={response} copyLink={copyLink} copyStatus={copyStatus}/>
            </div>
          </section>
        </div>
      </div>

      <Wave
        viewBox={"0 0 1000 320"}
        fill=""
        fillOpacity={"0.4"}
        className="sm:block hidden top-0 rotate-180"
      ></Wave>
      <Wave
        viewBox={"0 0 1440 320"}
        fill=""
        fillOpacity={"1"}
        className="sm:block hidden bottom-0"
      ></Wave>
      {/* <div className="sm:hidden block rounded-full bg-secondary w-[10px] h-[10px] absolute bottom-10 right-20 z-0"></div>
      <div className="sm:hidden block rounded-full bg-accent2 w-[10px] h-[10px] absolute top-40 right-60 z-0"></div>
      <div className="sm:hidden block rounded-full bg-accent2 w-[10px] h-[10px] absolute top-20 right-20 z-0"></div>
      <div className="sm:hidden block rounded-full bg-secondary w-[10px] h-[10px] absolute bottom-10 left-10 z-0"></div>
      <div className="sm:hidden block rounded-full bg-secondary w-[10px] h-[10px] absolute top-20 left-20 z-0"></div>
      <div className="sm:hidden block rounded-full bg-accent2 w-[10px] h-[10px] absolute bottom-40 left-20 z-0"></div>
      <div className="sm:hidden block rounded-full bg-secondary w-[10px] h-[10px] absolute bottom-60 right-20 z-0"></div>
      <div className="sm:hidden block rounded-full bg-accent2 w-[10px] h-[10px] absolute top-10 right-40 z-0"></div>
      <div className="sm:hidden block rounded-full bg-secondary w-[10px] h-[10px] absolute bottom-10 left-10 z-0"></div>
      <div className="sm:hidden block rounded-full bg-secondary w-[10px] h-[10px] absolute top-20 left-20 z-0"></div>
      <div className="sm:hidden block rounded-full bg-accent2 w-[8px] h-[8px] absolute bottom-4 left-2 z-0"></div>
      <div className="sm:hidden block rounded-full bg-secondary w-[8px] h-[8px] absolute bottom-6 right-12 z-0"></div>
      <div className="sm:hidden block rounded-full bg-accent2 w-[10px] h-[10px] absolute top-8 right-10 z-0"></div> */}
      {/* <div className="sm:hidden block rounded-full bg-gradient-to-r from-[#001124] via-[#002858]  to-[#001124] w-[300px] h-[300px] absolute -bottom-20 -right-20 z-0 bg-opacity-10"></div>
      <div className="sm:hidden block rounded-full bg-gradient-to-r from-[#002858] via-[#002858] to-[#001124] w-[400px] h-[400px] absolute -bottom-20 -left-20 z-0"></div>
      <div className="sm:hidden block rounded-full bg-gradient-to-r from-[#001124] via-[#002858] to-[#001124] w-[440px] h-[440px] absolute -bottom-80 z-0"></div> */}
      {/* <div className="w-full h-[400px] sm:w-0 sm:h:-0 bg-accent absolute top-0 "></div> */}
    </div>
  );
}

export default App;
