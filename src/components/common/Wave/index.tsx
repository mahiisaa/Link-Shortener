interface IWaveProps{
    viewBox:string,
    fill:string,
    fillOpacity:string,
    className:string
}
export const Wave:React.FC<IWaveProps>=({viewBox,fill,fillOpacity,className}):JSX.Element=>{
    return(
        <div className={`absolute w-full ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
          <path
            fill={fill}
            fill-opacity={fillOpacity}
            d="M0,96L30,112C60,128,120,160,180,154.7C240,149,300,107,360,106.7C420,107,480,149,540,192C600,235,660,277,720,256C780,235,840,149,900,133.3C960,117,1020,171,1080,160C1140,149,1200,75,1260,53.3C1320,32,1380,64,1410,80L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    )

}