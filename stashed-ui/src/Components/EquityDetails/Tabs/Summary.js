import React from "react";
import "./styles.css";

const SubSection = props => {
  const { title, children } = props;
  return (
    <>
      <h3 className="eq-tab-subtitle">{title}</h3>
      {children}
    </>
  );
};

const Summary = props => {
  const {
    profile: { description, marketCapitalization, ipo }
  } = props;
  return (
    <div className="eq-tab-container">
      <h2 className="eq-tab-title">Summary</h2>
      <SubSection title="Description">
        <p>{description}</p>
      </SubSection>
      <SubSection title="Details">
        <p>{`Market Cap: $${marketCapitalization} USD`}</p>
        <p>{`Initial Public Offering: ${ipo}`}</p>
      </SubSection>
    </div>
  );
};

export default Summary;
