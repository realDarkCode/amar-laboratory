import React from "react";

const CheProcedureTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5">
      <div className="mb-2 mt-6">
        <h2 className="font-semibold mb-2"> ল্যাব এর কার্যধারা </h2>
        <p className="mb-2">
          বিভিন্ন বর্ণের আলোতে উদ্ভেদের সালোকসংশ্লেষণের হার নির্ণয়
        </p>
        <ul className="list-inside leading-loose list-disc">
          <li>
            একটি বিকারে পানি নিয়ে তার ভিতর উদ্ভিদটি রেখে চিত্রের মতো টেস্ট
            টিউবটি অর্ধেক পানি দ্বারা পূর্ণ করে উল্টো করে রাখতে হবে
          </li>
          <li>
            স্কেল নিয়ে দূরত্ব মেপে নির্দিষ্ট দূরত্ব পরে প্রথমে একটি রঙের আলো
            ফেলতে হবে বিকারটির দিকে
          </li>
          <li>এ সময় স্টপ ওয়াচ দিয়ে সময় এর দিকে নজর রাখতে হবে</li>
          <li>একইভাবে একই দূরত্বে একই সময় নিয়ে ভিন্ন ভিন্ন আলো ফেলতে হবে</li>
        </ul>
      </div>
    </div>
  );
};

export default CheProcedureTemplate;
