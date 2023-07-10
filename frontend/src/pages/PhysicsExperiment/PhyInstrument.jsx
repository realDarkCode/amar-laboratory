import Image04 from "./images/phy04.png";
import Image05 from "./images/phy05.png";

const imageStyle = {width: "28rem", border: "1px solid", borderRadius: "20xp"}
const ChemistryInstrument = () => {

    return <>
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5">
      {/* Main Content */}
      <div className="mb-1">
        <h2 className="font-semibold mb-2"> প্রয়োজনীয় যন্ত্রপাতি: </h2>
  <p className="ml-12">স্ক্রু গজ, তার</p>
     
         <div className="flex flex-wrap items-center justify-center" style={{gap: "10px"}}>
        <img src={Image04} alt="simulation-theory" style={imageStyle} />
       
        <img src={Image05} alt="simulation-theory" style={imageStyle} />
        </div>
      
      </div>
      </div>
    </>
}

export default ChemistryInstrument; 