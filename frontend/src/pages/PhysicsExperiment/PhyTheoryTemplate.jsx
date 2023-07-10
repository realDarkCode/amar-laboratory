import React from "react";
import Image01 from "./images/phy01.png";
import Image02 from "./images/phy02.png";
import Image03 from "./images/phy03.png";


const CheTheoryTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 ">
        <h2 className="font-semibold"> পরীক্ষণের নাম: </h2>
        <p>
          একটি বৃত্তাকার প্রস্থচ্ছেদ বিশিষ্ট তারের প্রস্থচ্ছেদের ক্ষেত্রফল নির্ণয় 
        </p>

        <div className="mb">
        <h2 className="font-semibold"> পরীক্ষণের উদ্দেশ্য: </h2>
        <p>
          স্ক্রু গজ ব্যবহার করে তারের ব্যাস নির্ণয়। 
        </p>
      </div>
      </div>


      {/* Content 2 */}
      <div className="mb-4">
        <h2 className="font-semibold"> সূত্র: </h2>

        <p>
         ক্ষেত্রফল হলো কোন বস্তুর পৃষ্ঠের পরিমাপ। কোনো তারের প্রস্থ বরাবর দৈর্ঘ্যের সাতে লম্বভাবে ছেদ কাটলে যে তল পাওয়া যায় তার পরিমাণই হচ্ছে প্রস্থচ্ছেদের ক্ষেত্রফল। 
         কোন বৃত্তাকার প্রস্থচ্ছেদ বিশিষ্ট তারের প্রস্থচ্ছেদের ক্ষেত্রফল A হলে, 
        </p>
        <div className="mt-2 w-32">
          <img src={Image01} alt="equation-1" clas />
        </div>
        <div className="mb-2">
        <p>এখানে, r = তারের ব্যাসার্ধ </p>
        <p className="ml-12"> π = 3.14; ধ্রুব সংখা </p>
        <p >এখন তারের ব্যাস d হলে r = d/2, সুতরাং</p>
        
          <img className="w-32 ml-3" src={Image02} alt="equation-2" clas />
          <img  className="w-32" src={Image03} alt="equation-3" clas />
          </div>
      <div className="mt-2">
      <p className="pt-2">
          স্ক্রু গজের সাহায্যে যে কোনো দৈর্ঘ্যের পাঠ নির্ণয়ের সূত্রঃ 
        </p>
        <p>দৈর্ঘ্য = রৈখিক স্কেল পাঠ (L) + বৃত্তাকার স্কেলের ভাগ সংখ্যা (C) x লঘিষ্ঠ গণন (LC)</p>
        <p>অর্থ্যাৎ, d = L + C x LC</p>
      </div>
      </div>
      
      
      <div className="pb-5">
        <h2 className="font-semibold mb-1"> সতর্কতা: </h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            রৈখিক স্কেলের ক্ষুদ্রতম ঘরের মান, যন্ত্রের পিচ ও লঘিষ্ঠ গণন সতর্কতার সাথে নির্ণয় করা হয়েছে। 
          </li>
          <li>
            রৈখিক স্কেল পাঠ ও বৃত্তাকার স্কেলের ভাগ সংখ্যা সতর্কতার সাথে নির্ণয় করা হয়েছে। 
          </li>
          <li>
            পাঠ নেওয়ার সময় লম্বন ত্রুটি পরিহার করা হয়েছে। 
          </li>
          <li>
            A ও B প্রান্তদ্বয় যাতে খুব জোরে লেগে না থাকে সেদিকে খেলায়  রাখতে হয়েছে। 
          </li>
         
        </ul>
      </div>


      <div className="mb-4">
        <h2 className="font-semibold"> আলোচনা: </h2>

        <p>
        ফলাফলে কিছু ত্রুটি  আসতে পারে। পরীক্ষাটি যেহেতু সম্পূর্ণরুপে পরিমাপ নির্ভর  তাই যান্ত্রিক ত্রুটি বা ব্যাক্তিগত ত্রুটির কারণে ফলাফলের আই ত্রুটি হতে পারে। 
        </p>

    
      </div>
    </div>
  );
};

export default CheTheoryTemplate;
