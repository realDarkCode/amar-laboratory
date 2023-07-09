//  Bio Images
import amiba from "../assets/images/experiments/amiba-observation.jpg";
import co2 from "../assets/images/experiments/anaerobic-respiration.jpg";
import arshola from "../assets/images/experiments/arshola-observation.jpg";
import blood from "../assets/images/experiments/blood-observation.jpg";
import carbohydrate from "../assets/images/experiments/carbohydrates.jpg";
import flower from "../assets/images/experiments/flowering-plants.jpg";
import hydra from "../assets/images/experiments/hyrda-observation.jpg";
import malvacea from "../assets/images/experiments/malvaceae.jpg";
import mitosis from "../assets/images/experiments/mitosis-division.jpg";
import bacteria from "../assets/images/experiments/observing-bacteria.jpg";
import osmosis from "../assets/images/experiments/osmosis-test.jpg";
import light from "../assets/images/experiments/photosynthesis.jpg";
import plantCell from "../assets/images/experiments/plant-cells.jpg";
import kidney from "../assets/images/experiments/renal-parameters.jpg";

// Che Images
import KMnO4 from "../assets/images/experiments/KMnOsolution.jpg";
import acid from "../assets/images/experiments/acid-base.jpg";
import ammonia from "../assets/images/experiments/ammonia.jpg";
import carbonateSalt from "../assets/images/experiments/carbonate-salt.jpg";
import chromatography from "../assets/images/experiments/chromatography.jpg";
import degeneration from "../assets/images/experiments/degeneration.jpg";
import flame from "../assets/images/experiments/flame-test.jpg";
import kelasan from "../assets/images/experiments/kelasan-method.jpg";
import litmas from "../assets/images/experiments/litmus-paper.jpg";
import metalicCarbonate from "../assets/images/experiments/metallic-carbonate.jpg";
import {
  default as HCl,
  default as NaOH,
} from "../assets/images/experiments/sodium-carbonate.jpg";
import sodiumHydroxide from "../assets/images/experiments/sodium-hydroxide.jpg";

// Physics Images
import concaveMirror from "../assets/images/experiments/concave-mirror.jpg";
import concavelens from "../assets/images/experiments/concavelens.jpg";
import densityOfSolid from "../assets/images/experiments/density-of-solid.jpg";
import helicalSpring from "../assets/images/experiments/helical-spring.jpg";
import inclinedplane from "../assets/images/experiments/inclinedplane.jpg";
import meter from "../assets/images/experiments/meter-bridge.jpg";
import newtonsSecondLaw from "../assets/images/experiments/newtons-second-law.jpg";
import ohmsLaw from "../assets/images/experiments/ohms-law.jpg";
import potentiometer from "../assets/images/experiments/potentiometer.jpg";
import screwguage from "../assets/images/experiments/screwguage.jpg";
import sonometer from "../assets/images/experiments/sonometer.jpg";
import spheroMeter from "../assets/images/experiments/sphero-meter.jpg";
import vernierCalliper from "../assets/images/experiments/vernier-calliper.jpg";
import youngsModulus from "../assets/images/experiments/youngs-modulus.jpg";

export const experimentsList = [
  {
    tag: "12-bio-arshola",
    image: arshola,
    name: "ঘাস ফড়িং / আরশোলার মুখোপাঙ্গ পর্যবেক্ষণ।",
    title: "প্রাণীর পরিচিতি - আরশোলা",
    route: "class-9-bio-102",
  },
  {
    tag: "12-bio-hyra",
    image: hydra,
    name: "হাইড্রা (Hydra) এর স্থায়ী স্লাইড অথবা মডেল পর্যবেক্ষণ।",
    title: "প্রাণীর পরিচিতি - হাইড্রা",
    route: "class-9-bio-102",
  },
  {
    tag: "12-bio-blood",
    image: blood,
    name: "রক্তের স্লাইড থেকে রক্ত ও সংবহন পর্যবেক্ষন।",
    title: "মানব শরীরতত্ত্ব - রক্তের স্লাইড",
    route: "class-9-bio-102",
  },
  {
    tag: "12-bio-kidney",
    image: kidney,
    name: "বৃক্কের অনুচ্ছেদের স্থায়ী স্লাইড পর্যবেক্ষণ ও সনাক্তকরণ ।",
    title: "মানব শরীরতত্ত্ব - বৃক্কের অনুচ্ছেদ",
    route: "class-9-bio-102",
  },
  {
    tag: "11-bio-malvacea",
    image: malvacea,
    name: "মালভ্যাসি (Malvaceae) গোত্র সনাক্তকরণ।",
    title: "উদ্ভিদ শরীরতত্ত্ব - মালভ্যাসি গোত্র",
    route: "class-9-bio-102",
  },
  {
    tag: "11-bio-co2",
    image: co2,
    name: `অবাত শ্বসনে CO₂ নির্গমনের পরীক্ষা।`,
    title: "জীবপ্রযুক্তি - অবাত শ্বসন",
    route: "class-9-bio-102",
  },
  {
    tag: "11-bio-mitosis",
    image: mitosis,
    name: "মাইটোসিস বিভাজনের বিভিন্ন পর্যায়।",
    title: "কোষ বিভাজন - মাইটোসিস বিভাজন",
    route: "class-9-bio-102",
  },
  {
    tag: "11-bio-bacteria",
    image: bacteria,
    name: "টক দই থেকে ব্যাকটেরিয়া পর্যবেক্ষণ।",
    title: "অণুজীব - ব্যাকটেরিয়া পর্যবেক্ষণ",
    route: "class-9-bio-102",
  },

  {
    tag: "10-bio-plantCell",
    image: plantCell,
    name: "অণুবীক্ষণ যন্ত্রের সাহায্যে উদ্ভিদ কোষ (পেঁয়াজ) পর্যবেক্ষণ।",
    title: "জীবকোষ ও টিস্যু - উদ্ভিদ কোষ",
    route: "class-9-bio-102",
  },
  {
    tag: "10-bio-osmosis",
    image: osmosis,
    name: "কোষ হতে কোষে অভিস্রবনের পরীক্ষা।",
    title: "কোষ বিভাজন - অভিস্রবন",
    route: "class-9-bio-102",
  },
  {
    tag: "10-bio-amiba",
    image: amiba,
    name: "অণুবীক্ষণ যন্ত্রের সাহাযে প্রাণীকোষ (অ্যামিবা) পর্যবেক্ষন।",
    title: "জীবে পরিবহন - অ্যামিবা পর্যবেক্ষন",
    route: "class-9-bio-102",
  },
  {
    tag: "10-bio-carbohydrate",
    image: carbohydrate,
    name: "কার্বোহাইড্রেট, প্রোটিন এবং চর্বি সনাক্তকরণ।",
    title: "খাদ্য, পুষ্টি ও পরিপাক - কার্বোহাইড্রেট",
    route: "class-9-bio-102",
  },
  {
    tag: "09-bio-light",
    image: light,
    name: "সালোকসংশ্লেষণ প্রক্রিয়ায় ক্লোরোফিল ও আলোর অপরিহার্যতার পরীক্ষণ।",
    title: "গ্যাসীয় বিনিময় - সালোকসংশ্লেষণ প্রক্রিয়া",
    route: "class-9-bio-102",
  },
  {
    tag: "09-bio-flower",
    image: flower,
    name: "একটি ফুলের বিভিন্ন অংশ লম্বচ্ছেদ।",
    title: "জীবকোষ ও টিস্যু - ফুলের লম্বচ্ছেদ",
    route: "class-9-bio-102",
  },
  {
    tag: "12-che-KMn04",
    image: KMnO4,
    name: "KMnO₄ দ্রবন দ্বারা অজানা ঘনমাত্রার দ্রবনে ফেরাস আয়নের পরিমান নির্ণয়।",
    title: "পরিমাণগত রসায়ন - পটাশিয়াম পারম্যাঙ্গানেট",
    route: "class-12-che-103",
  },
  {
    tag: "12-che-HCl",
    image: HCl,
    name: "0.1M সোডিয়াম কার্বোনেট দ্রবণ দ্বারা নমুনা HCl দ্রবণের ঘনমাত্রা নির্ণয়।",
    title: "পরিমাণগত রসায়ন - সোডিয়াম কার্বোনেট",
    route: "class-12-che-103",
  },
  {
    tag: "12-che-NaOH",
    image: NaOH,
    name: "0.5M অক্সালিক অ্যাসিড দ্রবন দ্বারা নমুনা NaOH দ্রবনের ঘনমাত্রা নির্ণয়।",
    title: "পরিমাণগত রসায়ন - অক্সালিক অ্যাসিড",
    route: "class-12-che-103",
  },
  {
    tag: "12-che-carbohydrate",
    image: carbohydrate,
    name: "সরবরাহকৃত জৈব নমুনায় কার্যকরী মূলক শনাক্তকরণ (অজানা নমুনা)।",
    title: "জৈব যৌগ - কার্বোহাইড্রেট",
    route: "class-12-che-103",
  },
  {
    tag: "11-che-flame",
    image: flame,
    name: "শিখা পরীক্ষার মাধ্যমে বিভিন্ন ধাতব আয়নের শনাক্তকরণ।",
    title: "গুণগত রসায়ন - শিখা পরীক্ষা",
    route: "class-12-che-103",
  },
  {
    tag: "11-che-chromatography",
    image: chromatography,
    name: "পেপার ক্রোমাটোগ্রাফির সাহায্যে মিশ্রণ থেকে যৌগ পৃথকীকরণ ।",
    title: "রাসায়নিক পরিবর্তন - ক্রোমাটোগ্রাফি",
    route: "class-12-che-103",
  },
  {
    tag: "11-che-acid",
    image: acid,
    name: "মৌলের দ্রবণীয় অক্সাইডের অম্ল-ক্ষার প্রকৃতি নির্ণয়।",
    title: "গুণগত রসায়ন - অম্ল-ক্ষার",
    route: "class-12-che-103",
  },
  {
    tag: "11-che-kelasan",
    image: kelasan,
    name: "কেলাসন পদ্ধতিতে অবিশুদ্ধ খাদ্য লবণ থেকে বিশুদ্ধ লবণের কেলাস তৈরি।",
    title: "রাসায়নিক পরিবর্তন - কেলাসন পদ্ধতি",
    route: "class-12-che-103",
  },
  {
    tag: "10-che-litmas",
    image: litmas,
    name: "লিটমাস পেপার ও pH ব্যবহার করে খাদ্য থেকে অম্লীয় ও ক্ষার প্রণয়ন।",
    title: "এসিড ক্ষার সমতা - লিটমাস পেপার",
    route: "class-12-che-103",
  },
  {
    tag: "10-che-ammonia",
    image: ammonia,
    name: "এমোনিয়া লবণের সাথে ক্ষারের বিক্রিয়ার পরিবর্তন পর্যবেক্ষণ।",
    title: "রাসায়নিক বিক্রিয়া - এমোনিয়া লবণ",
    route: "class-12-che-103",
  },
  {
    tag: "10-che-sodiumHydroxide",
    image: sodiumHydroxide,
    name: "দুইটি জানা লবণের দ্রবণে NaOH যোগ করে পরিবর্তন পর্যবেক্ষণ।",
    title: "রাসায়নিক বিক্রিয়া - কস্টিক সোডা",
    route: "class-12-che-103",
  },
  {
    tag: "10-che-carbonateSalt",
    image: carbonateSalt,
    name: "কার্বনেট লবণের সাথে পানি ও এসিড মিশ্রিত করে বিক্রিয়ার হার পরীক্ষা।",
    title: "রাসায়নিক বিক্রিয়া - কার্বনেট লবণ",
    route: "class-12-che-103",
  },
  {
    tag: "09-che-degeneration",
    image: degeneration,
    name: "ঊর্ধ্বপাতন প্রক্রিয়ায় মিশ্রণ থেকে দুটি উপাদানকে পৃথকীকরণ।",
    title: "রাসায়নিক বন্ধন - ঊর্ধ্বপাতন প্রক্রিয়া",
    route: "class-12-che-103",
  },
  {
    tag: "09-che-metallicCarbonate",
    image: metalicCarbonate,
    name: "ধাতব কার্বনেট যৌগের সাথে লঘু এসিডের বিক্রিয়ায় গ্যাস শনাক্তকরণ।",
    title: "রাসায়নিক বিক্রিয়া - গ্যাস শনাক্তকরণ",
    route: "class-12-che-103",
  },
  {
    tag: "12-phy-meterBridge",
    image: meter,
    name: "মিটার ব্রিজ ব্যবহার করে কোন তারের আপেক্ষিক রোধ নির্ণয়।",
    title: "চলতড়িৎ - হুইটস্টোন ব্রীজ",
    route: "class-10-phy-101",
  },
  {
    tag: "12-phy-concavelens",
    image: concavelens,
    name: "উত্তল লেন্সের ব্যবহার করে লেন্সের ফোকাস দূরত্ব ও ক্ষমতা নির্ণয়।",
    title: "আলোর প্রতিফলন - উত্তল লেন্স",
    route: "class-10-phy-101",
  },
  {
    tag: "12-phy-potentiometer",
    image: potentiometer,
    name: "পটেনশিওমিটার এর সাহায্যে দুটি কোষের তড়িচ্চালক বলের তুলনা।",
    title: "চলতড়িৎ - পটেনশিওমিটার",
    route: "class-10-phy-101",
  },
  {
    tag: "12-phy-ohmsLaw",
    image: ohmsLaw,
    name: "ওহমের সূত্র এবং রোধের সূত্রের যথার্থতা প্রমান।",
    title: "চলতড়িৎ - ওহমের সূত্র",
    route: "class-10-phy-101",
  },
  {
    tag: "11-phy-spheroMeter",
    image: spheroMeter,
    name: "স্ফেরোমিটারের সাহায্যে একটি উত্তল ও অবতল বক্রতার ব্যাসার্ধ নির্ণয়।",
    title: "আলোকবিদ্যা - স্ফেরোমিটার",
    route: "class-10-phy-101",
  },
  {
    tag: "11-phy-youngsModulus",
    image: youngsModulus,
    name: "ভার্নিয়ার পদ্ধতিতে তারের উপাদানের ইয়ংয়ের গুণাংক নির্ণয় কর।",
    title: "বলবিদ্যা - ইয়ংয়ের গুণাংক",
    route: "class-10-phy-101",
  },
  {
    tag: "11-phy-helicalSpring",
    image: helicalSpring,
    name: "একটি হেলিকাল স্প্রিং এর স্প্রিং বল ধ্রুবক নির্ণয়।",
    title: "বলবিদ্যা - হেলিকাল স্প্রিং",
    route: "class-10-phy-101",
  },
  {
    tag: "11-phy-sonometer",
    image: sonometer,
    name: "মেলডির পরীক্ষার সাহায্যে সুরশলাকার কম্পাংক নির্ণয়।",
    title: "তরঙ্গ - সুরশলাকার কম্পাংক",
    route: "class-10-phy-101",
  },
  {
    tag: "10-phy-vernierCalliper",
    image: vernierCalliper,
    name: "একটি আায়তাকার বস্তুর একটি পৃষ্ঠের ক্ষেত্রফল ও বস্তুর আয়তন নির্ণয়।",
    title: "ভৌত রাশি ও পরিমাপ - স্লাইড ক্যালিপার্স",
    route: "class-10-phy-101",
  },
  {
    tag: "10-phy-screwguage",
    image: screwguage,
    name: "একটি বৃত্তাকার প্রস্থচ্ছেদ বিশিষ্ট তারের পস্থচ্ছেদের ক্ষেত্রফল নির্ণয়।",
    title: "ভৌত রাশি ও পরিমাপ - স্ক্রু গজ",
    route: "class-10-phy-101",
  },
  {
    tag: "10-phy-concaveMirror",
    image: concaveMirror,
    name: "উত্তল লেন্স ব্যবহার করে প্রতিবিম্ব সৃষ্টি এবং প্রদর্শন।",
    title: "আলোর প্রতিফলন  - উত্তল লেন্স",
    route: "class-10-phy-101",
  },
  {
    tag: "10-phy-inclinedplane",
    image: inclinedplane,
    name: "একটি ঢালু তক্তার উপরে মর্বেল গড়িয়ে পড়তে দিয়ে গড় দ্রুতি নির্ণয়।",
    title: "গতি - আনত তল",
    route: "class-10-phy-101",
  },
  {
    tag: "09-phy-densityOfSolid",
    image: densityOfSolid,
    name: "কোনো বস্তুর উপর প্রযুক্ত বল পরিমাপ – স্প্রিং নিক্তির সাহায্যে।",
    title: "পদার্থের অবস্থা ও চাপ - আপেক্ষিক ঘনত্ব ",
    route: "class-10-phy-101",
  },
  {
    tag: "09-phy-newtonsSecondLaw",
    image: newtonsSecondLaw,
    name: "নিউটনের গতির দ্বিতীয় সূত্রের যথার্থ সত্যতা প্রমাণ।",
    title: "গতি - নিউটনের দ্বিতীয় সূত্র",
    route: "class-10-phy-101",
  },
];
