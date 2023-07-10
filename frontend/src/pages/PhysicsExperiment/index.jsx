import {
  faBook,
  faFlask,
  faFlaskVial,
  faMicroscope,
  faTasks,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PlaySimulationTemplate from "../../components/Experiment/PlaySimulationTemplate";
import VideoTemplate from "../../components/Experiment/VideoTemplate";
import PhyCalculation from "./PhyCalculation";
import PhyInstrument from "./PhyInstrument";
import PhyProcedure from "./PhyProcedureTemplate";
import PhyTheory from "./PhyTheoryTemplate";
const CheSimulationTemplate = () => {
  const [openTab, setOpenTab] = React.useState(1);

  document.title =
    "একটি বৃত্তাকার প্রস্থচ্ছেদ বিশিষ্ট তারের পস্থচ্ছেদের ক্ষেত্রফল নির্ণয়।";

  // YouTube video ID
  const videoSimulationId = {
    videoId: "SnDG2zQjjR4",
  };

  return (
    <section>
      <div className="flex flex-wrap pt-4 justify-center	">
        <div className="w-11/12 ">
          {/* Tab Button List */}
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row"
            role="tablist"
          >
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={` simulation-template  
									${openTab === 1 ? "text-white bg-brand-900" : "text-brand-900 bg-white"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <FontAwesomeIcon icon={faBook} className="mr-1" /> তত্ত্ব
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={` simulation-template  
                                ${
                                  openTab === 2
                                    ? "text-white bg-brand-900"
                                    : "text-brand-900 bg-white"
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <FontAwesomeIcon icon={faFlask} className="mr-1" /> উপকরণ
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={` simulation-template  
                                ${
                                  openTab === 3
                                    ? "text-white bg-brand-900"
                                    : "text-brand-900 bg-white"
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <FontAwesomeIcon icon={faTasks} className="mr-1" /> কার্যপ্রণালী
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`simulation-template  
                  ${
                    openTab === 4
                      ? "text-white bg-brand-900"
                      : "text-brand-900 bg-white"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <FontAwesomeIcon icon={faVideo} className="mr-1" /> ভিডিও
              </a>
            </li>

            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`simulation-template  
                                ${
                                  openTab === 5
                                    ? "text-white bg-brand-900"
                                    : "text-brand-900 bg-white"
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <FontAwesomeIcon icon={faFlaskVial} className="mr-1" /> পরীক্ষণ
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`simulation-template  
                                ${
                                  openTab === 6
                                    ? "text-white bg-brand-900"
                                    : "text-brand-900 bg-white"
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <FontAwesomeIcon icon={faMicroscope} className="mr-1" />{" "}
                পর্যবেক্ষণ
              </a>
            </li>
          </ul>
          {/* Tab Content Components */}
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={`mb-5 ${openTab === 1 ? "block" : "hidden"}`}
                  id="link1"
                >
                  <PhyTheory />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <PhyInstrument />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                  <PhyProcedure />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <VideoTemplate videoId={videoSimulationId.videoId} />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <PlaySimulationTemplate
                    videoURL={"http://localhost:3000/html5/phy.html"}
                  />
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link5">
                  <PhyCalculation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheSimulationTemplate;
