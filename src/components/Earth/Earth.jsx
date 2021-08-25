import React, {useState} from "react";
import ReactGlobe from "react-globe";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import data from "./data";
import change from "./options";

const options = {
  change
};

function Earth() {
  const [globe, setGlobe] = useState(null);

  return (
    <div>
      <ReactGlobe
        options={options}
        height="100vh"
        globeCloudsTexture={null}
        initialCoordinates={[1.3521, 103.8198]}
        markers={data}
        options={options}
        globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
      />
    </div>
  );
}

export default Earth;
