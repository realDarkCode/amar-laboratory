import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Table from "./Table";
import Image03 from "./images/phy03.png";
import Image06 from "./images/phy06.png";

const PhyCalculation = () => {
  const [result, setResult] = useState(1.458);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 w-full" ref={componentRef}>
        <h2 className="font-semibold"> (ক): লঘিষ্ঠ গণন নির্ণয়ঃ </h2>
        <p>রৈখিক স্কেলের এক ভাগের মান, s = 1 mm</p>
        <p>বৃত্তাকার স্কেলের মোট ভাগ সংখ্যা, n = 100</p>
        <p>
          পিচ (বৃত্তাকার স্কেল সম্পূর্ণ একবার ঘুরালে রৈখিক স্কেল যে দৈর্ঘ্য
          অতিক্রম করে), p = 1 mm
        </p>
        <p>লঘিষ্ঠ গণন, </p>
        <img src={Image06} alt="equation" srcset="" className="w-52 ml-12" />
        <div className="mb-3">
          <h2 className="font-semibold"> তারের ব্যাস নির্ণয়ের ছক: </h2>
          <Table result={result} setResult={setResult} />
        </div>
        <div className="mb-2">
          <h2 className="font-semibold">হিসাব ও ফলাফলঃ</h2>
          <p>তারের প্রস্থচ্ছেদের ক্ষেত্রফল, </p>
          <div className="ml-36">
            <img src={Image03} alt="equation" className="w-20" />
            <p>= 0.25 x 3.14 x ({result})² mm</p>
            <p>
              = {Math.round((1 / 4) * 3.14 * Math.pow(result, 2) * 1000) / 1000}{" "}
              mm²
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        {" "}
        <button type="button" className="print-btn" onClick={handlePrint}>
          ডাউনলোড করুন
        </button>
      </div>
    </div>
  );
};

export default PhyCalculation;
