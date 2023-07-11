import React from "react";
import Image01 from "./images/bio01.png";
import Image02 from "./images/bio02.png";

const CheTheoryTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 w-100">
        <h2 className="font-semibold"> পর্যবেক্ষণের নাম: </h2>
        <p>
          বিভিন্ন বর্ণের আলোয়{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            সালোকসংশ্লেষণ
          </a>{" "}
          হার পর্যবেক্ষণ
        </p>
      </div>

      {/* Content 2 */}
      <div className="mb-2 w-100">
        <h2 className="font-semibold"> তত্ত্ব: </h2>
        <p>
          লাল, নীল, কমলা ও বেগুনি আলোতে{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            সালোকসংশ্লেষণ
          </a>{" "}
          ভালো হয়। সবুজ কিংবা হলুদ আলোতে{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            সালোকসংশ্লেষণ
          </a>{" "}
          ভালো হয় না।
        </p>
        <div className="center">
          <img src={Image01} className="w-160" alt="" />
        </div>
      </div>
      <div className="mb-2">
        <h2 className="font-semibold">সালোকসংশ্লেষণঃ</h2>
        <p>
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            সালোকসংশ্লেষণ
          </a>{" "}
          হলো একটি{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            জৈব রাসায়নিক প্রক্রিয়া,
          </a>{" "}
          যার মাধ্যমে উদ্ভিদ{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%A8_%E0%A6%A1%E0%A6%BE%E0%A6%87_%E0%A6%85%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%BE%E0%A6%87%E0%A6%A1"
            target="_blank"
            className="ref-link"
          >
            কার্বন ডাই-অক্সাইড(CO<sub>2</sub>)
          </a>
          ,{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF"
            target="_blank"
            className="ref-link"
          >
            পানি(H
            <sub>2</sub>O)
          </a>{" "}
          ও সূর্যের আলোর সাহায্যে খাদ্য তৈরি করে। সালোক সংশ্লেষণ প্রক্রিয়ায়
          উদ্ভিদ খাদ্য তৈরির সময় অক্সিজেন (O
          <sub>2</sub>) ত্যাগ করে।
        </p>
        <div className="center">
          <img src={Image02} alt="equation" className="w-120" />
        </div>
        <p>
          সাধারণত 400 nm থেকে 480 nm এবং 680 nm (ন্যানোমিটার) তরঙ্গ দৈর্ঘ্য
          বিশিষ্ট আলোতে{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            সালোকসংশ্লেষণ
          </a>{" "}
          সবচেয়ে ভালো হয়।
        </p>
      </div>
      <div className="mb-2">
        <h2 className="font-semibold">আলোর তরঙ্গ দৈর্ঘ্যঃ</h2>
        <p>
          এক সেকেন্ডে কোনো কণা (এক্ষেত্রে আলোর কণা ) যতগুলো পূর্ণ ‍স্পন্দন করতে
          পারে, তাকে আলোক{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%A4%E0%A6%B0%E0%A6%99%E0%A7%8D%E0%A6%97"
            target="_blank"
            className="ref-link"
          >
            তরঙ্গ
          </a>{" "}
          <a
            href="https://en.wikipedia.org/wiki/Frequency"
            target="_blank"
            className="ref-link"
          >
            ফ্রিকোয়েন্সি
          </a>{" "}
          বলে। এর একক হার্জ(Hz)
        </p>
        <div className="ml-12">
          <p>f=1/T [T= পর্যায়কাল]</p>
          <p>f=v/ λ [λ=তরঙ্গ দৈর্ঘ্য]</p>
        </div>
        <div className="mt-2">
          <p>
            বিভিন্ন বর্ণের আলোর{" "}
            <a
              href="https://bn.wikipedia.org/wiki/%E0%A6%A4%E0%A6%B0%E0%A6%99%E0%A7%8D%E0%A6%97"
              target="_blank"
              className="ref-link"
            >
              তরঙ্গ
            </a>{" "}
            দৈর্ঘ্যঃ
          </p>
          <ul className="list-inside leading-loose list-disc ml-12">
            <li>নীল - ৪৫০–৪৯৫ nm</li>
            <li>লাল - ৬২৫-৭৪০ nm</li>
            <li>সবুজ - ৪৯৫–৫৭০ nm</li>
            <li>সাদা - ৩৯০-৭০০ nm</li>
          </ul>

          <p>
            সাদা যৌগিক আলো হওয়ায় এর নির্দিষ্ট{" "}
            <a
              href="https://bn.wikipedia.org/wiki/%E0%A6%A4%E0%A6%B0%E0%A6%99%E0%A7%8D%E0%A6%97"
              target="_blank"
              className="ref-link"
            >
              তরঙ্গ
            </a>{" "}
            দৈর্ঘ্য নেই । তবে সাদা আলোর উৎপত্তি বেগুনি, নীল , আসমানি , সবুজ
            ,হলুদ , কমলা ও লাল এর সংমিশ্রণ থেকে
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="font-semibold">সালোকসংশ্লেষণে আলোর প্রভাবঃ</h2>
        <p className="mb-4">
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            সালোকসংশ্লেষণ
          </a>{" "}
          জন্য অত্যন্ত গুরুত্বপূর্ণ উপাদান হলো সূর্যের আলো। সূর্যালোক{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A7%8B%E0%A6%B0%E0%A7%8B%E0%A6%AB%E0%A6%BF%E0%A6%B2"
            target="_blank"
            className="ref-link"
          >
            ক্লোরোফিল
          </a>{" "}
          সৃষ্টিতে অংশগ্রহণ করে। সূর্যালোকের প্রভাবেই{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%B0%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%8D%E0%A6%B0"
            target="_blank"
            className="ref-link"
          >
            পত্ররন্ধ্র
          </a>{" "}
          উন্মুক্ত হয়, CO
          <sub>2</sub> পাতার অভ্যন্তরে প্রবেশ করতে পারে এবং খাদ্য প্রস্তুতকরণে
          অংশগ্রহণ করে। কিন্তু আলোর পরিমাণ অত্যাধিক বেড়ে গেলে পাতার ভিতরকার{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%89%E0%A7%8E%E0%A6%B8%E0%A7%87%E0%A6%9A%E0%A6%95"
            target="_blank"
            className="ref-link"
          >
            এনজাইম
          </a>{" "}
          নষ্ট হয়ে যায়,{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A7%8B%E0%A6%B0%E0%A7%8B%E0%A6%AB%E0%A6%BF%E0%A6%B2"
            target="_blank"
            className="ref-link"
          >
            ক্লোরোফিল
          </a>{" "}
          উৎপাদন কম হয়। ফলে{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%95%E0%A6%B8%E0%A6%82%E0%A6%B6%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A6%B7%E0%A6%A3"
            target="_blank"
            className="ref-link"
          >
            সালোকসংশ্লেষণ
          </a>{" "}
          হারও কমে যায়।
        </p>
        <p>
          {" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A7%8B%E0%A6%B0%E0%A7%8B%E0%A6%AB%E0%A6%BF%E0%A6%B2"
            target="_blank"
            className="ref-link"
          >
            ক্লোরোফিল
          </a>{" "}
          এর{" "}
          <a
            href="https://en.wikipedia.org/wiki/Absorption_spectroscopy"
            target="_blank"
            className="ref-link"
          >
            অ্যাবজর্পশন স্পেক্ট্রা
          </a>{" "}
          দেখলে দেখা যায় তা সবুজ ও হলুদে সবচেয়ে কম আলো শোষণ করে ({" "}
          <a
            href="https://en.wikipedia.org/wiki/Absorption_spectroscopy"
            target="_blank"
            className="ref-link"
          >
            অ্যাবজর্পশন স্পেক্ট্রা
          </a>{" "}
          মিনিমম)। তাই পাতার রং সবুজ। তাই{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%A1"
            target="_blank"
            className="ref-link"
          >
            প্লাস্টিড{" "}
          </a>{" "}
          ( ক্লোরোপ্লাস্ট) বা পাতা বেগুনী, নীল ও লাল, কমলা য় সবচেয়ে বেশী
          অ্যাবজর্পশন এবং বেশী সালোকসংশ্লেষণ হয় । সহজ ভাবে বলতে গেলে লাল আলো
          অর্থাৎ 680 to 700mm তরঙ্গ দৈর্ঘ্যের আলো উদ্ভিদের{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A7%8B%E0%A6%B0%E0%A7%8B%E0%A6%AB%E0%A6%BF%E0%A6%B2"
            target="_blank"
            className="ref-link"
          >
            ক্লোরোফিল
          </a>{" "}
          সরাসরি গ্রহন করতে পারে কিন্তু এর নিচের তরঙ্গদৈর্ঘ্যের আলো প্রথমে{" "}
          <a
            href="https://www.google.com/search?q=%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A7%8B%E0%A6%9F%E0%A6%BF%E0%A6%A8%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A1+%E0%A6%95%E0%A6%BF"
            target="_blank"
            className="ref-link"
          >
            ক্যারোটেনয়েড{" "}
          </a>{" "}
          দ্বারা শোষিত হবার পর{" "}
          <a
            href="https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A7%8B%E0%A6%B0%E0%A7%8B%E0%A6%AB%E0%A6%BF%E0%A6%B2"
            target="_blank"
            className="ref-link"
          >
            ক্লোরোফিলে
          </a>{" "}
          সঞ্চারিত হয় । এর জন্য সালোকসংশ্লেষনে লাল আলো বেশী কার্য্যকরী
        </p>
      </div>
    </div>
  );
};

export default CheTheoryTemplate;
