import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { VerticalTabs } from "../../components/VerticalTabs";
import { Summary } from "./scenes/Summary";
import "./EquityDetails.css";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const EquityDetails = props => {
  const { ticker } = props;
  const [profile, setProfile] = useState(undefined);
  const list = [
    {
      id: 0,
      label: "Summary",
      component: <Summary profile={profile} />
    },
    {
      id: 1,
      label: "Item 2",
      component: <div className="content">Item Two</div>
    },
    {
      id: 2,
      label: "Item 3",
      component: <div className="content">Item Three</div>
    },
    {
      id: 3,
      label: "Item 4",
      component: <div className="content">Item Four</div>
    }
  ];
  const fetchProfile = async () => {
    const response = await axios.get(
      "https://finnhub.io/api/v1/stock/profile",
      {
        params: {
          symbol: ticker,
          token: "bpeg3mnrh5rckeckl8m0"
        }
      }
    );
    setProfile(response.data);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return profile ? (
    <div id="equity-container">
      <h2 id="equity-name">{profile.name}</h2>
      <VerticalTabs tabs={list} />
    </div>
  ) : (
    <CircularProgress />
  );
};

EquityDetails.propTypes = {
  ticker: PropTypes.string
};

export default EquityDetails;
