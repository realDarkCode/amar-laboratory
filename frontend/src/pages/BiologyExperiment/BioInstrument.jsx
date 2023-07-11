import Image03 from "./images/bio03.png";

const ChemistryInstrument = () => {
  return (
    <>
      <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5">
        {/* Main Content */}

        <h2 className="font-semibold">প্রয়োজনীয় উপকরণঃ</h2>
        <div className="mb-1 bio-intrument-image">
          <img src={Image03} alt="" />
          {/* <img src={Image9} alt="simulation-theory" className="py-1" /> */}
        </div>
      </div>
    </>
  );
};

export default ChemistryInstrument;
