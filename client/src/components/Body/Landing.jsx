import React, { useState } from "react";

//image
import Eipunk from "../../Images/eipunknew.png";

const Landing = () => {
  const [copyText, setCopyText] = useState("");
  const handleCopy = () => {
    setCopyText("0x89a081999249407C1153e135A2Af7d323419A66A");
    navigator.clipboard.writeText(copyText);
    alert("Copied 0x89a081999249407C1153e135A2Af7d323419A66A");
  };

  return (
    <div className="Container">
      <div className="LeftCol">
        <h2>
          The World's Fastest Growing <span className="Token">Token</span>{" "}
          Protocol
        </h2>
        <p className="line1">
          <span className="Token">TokenTitan Protocol</span> is a decentralized
          application platform designed to make apps usable on the web.
        </p>
        <p className="line1">
          The network runs on a Proof-of-Stake (POS) consensus mechanism called
          Nightsade, which aims to offer scalability and stable fees.
        </p>
        <p className="points line1">
          TokenTitanUSD is the native utility token that is used for:
          <br />
          Fees for processing transaction and storing data
          <br />
          Running validator nodes on the network via staking TokenTitanUSD token
          <br />
          Used for governance votes to determine how network resources are
          allocated
        </p>
        <h5 className="addressLine">TokenTitan Token Contract Address</h5>
        <input
          type="text"
          readonly=""
          value="0x89a081999249407C1153e135A2Af7d323419A66A"
        />
        {/* <button><ContentCopyTwoToneIcon className="copyIcon"/></button> */}
        <button class="clone" onClick={handleCopy}>
          <i class="fas fa-clone fa-lg clone-icon"></i>
        </button>
        <br />
        <button className="join-btn">Join Our Community</button>
      </div>
      <div className="RightCol">
        <img className="EiImage" src={Eipunk} alt="Eipunk" />
      </div>
    </div>
  );
};

export default Landing;
