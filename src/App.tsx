import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";
import { AXIOS } from "./config/axios.config";
import { API_URLS } from "./constants/api.urls";
import { Header } from "./components/Header";
function App() {
  const [link, setLink] = useState<string>();
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchLink = async () => {
    setLoading(true);
    try {
      const request = await AXIOS.post(API_URLS.GetLinks, {
        url: link,
      });
      
        setResponse(request.data.short_url);
      
    } catch (errors) {
      setError(errors);
      console.log(response.errors)
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (value: string) => {
    setLink(value);
    console.log(value);
    !value&&setError("")
  };
  const handleClick = () => {
    fetchLink();
  };
  const copyLink = () => {
    navigator.clipboard.writeText(response);
  };
  return (
    <div className="w-full bg-brand-primary h-screen flex justify-center relative">
      <div className="w-5/6 ">
        <Header />
        <div className="flex justify-center mt-18">
          <section className="w-[800px]">
            <h1 className="text-[#fdfefe] text-xl font-bold tracking-wide text-center mb-[48px]">
              Make your <span className="text-secondary">Links</span> shorter
              with WeWink
            </h1>

            <div className="flex flex-row justify-between items-center w-full mt-[22px]">
              <Input
                placeholder="write your link here"
                onChange={(value) => handleChange(value)}
                className={`${error&&"border-2 border-errorcolor text-errorcolor"} text-black font-bold`}
              />
              <Button
                isLoading={loading?true:false}
                text={loading?"wait":"Submit"}
                className="w-[166px] text-brand-primary"
                onClick={handleClick}
              ></Button>
              <div></div>
            </div>
            <div>
              <div className="bg-accent bg-opacity-20 p-6 mt-8 rounded-3xl flex justify-between shadow-lg shadow-black-500/20">
                <p className="text-[#ffffff] opacity-90 text-s font-semibold">
                  {response ? response : "wait for the result..."}
                </p>
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency-systems-regular/48/f4f4f4/copy--v1.png"
                  alt="copy--v1"
                  onClick={copyLink}
                  className="cursor-pointer"
                />
                
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="absolute bottom-0 w-full ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="accent"
            fill-opacity="0.3"
            d="M0,96L30,112C60,128,120,160,180,154.7C240,149,300,107,360,106.7C420,107,480,149,540,192C600,235,660,277,720,256C780,235,840,149,900,133.3C960,117,1020,171,1080,160C1140,149,1200,75,1260,53.3C1320,32,1380,64,1410,80L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1350 320"><path fill="accent" fill-opacity="0.3" d="M0,96L30,112C60,128,120,160,180,154.7C240,149,300,107,360,106.7C420,107,480,149,540,192C600,235,660,277,720,256C780,235,840,149,900,133.3C960,117,1020,171,1080,160C1140,149,1200,75,1260,53.3C1320,32,1380,64,1410,80L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg></div>
    </div>
  );
}

export default App;
