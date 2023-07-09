import { Router } from "@reach/router";
import BiologyExperiment from "../../pages/BiologyExperiment";
import ChemistryExperiment from "../../pages/ChemistryExperiment";
import Homepage from "../../pages/Homepage";
import PhysicsExperiment from "../../pages/PhysicsExperiment";
import "./style.css";
const PageContent = () => {
  return (
    <>
      <section className="page-content">
        <Router>
          <Homepage path="/" />

          <PhysicsExperiment path="class-10-phy-101" />
          <BiologyExperiment path="class-9-bio-102" />
          <ChemistryExperiment path="class-12-che-103" />
        </Router>
      </section>
    </>
  );
};

export default PageContent;
