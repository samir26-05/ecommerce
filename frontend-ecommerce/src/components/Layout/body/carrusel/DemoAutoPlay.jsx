import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import BlackSuit from "../../../../assets/Img/blacksuit.jpg";
import damaNegro from "../../../../assets/Img/damaNegro.jpg";
import ropaNegro from "../../../../assets/Img/ropaNegro.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
  },
  slide: {
    padding: 15,
    minHeight: 800,
    minWidth: 591,
    color: "#000000",
  },
  slide1: {
    backgroundImage: `url(${BlackSuit})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  slide2: {
    backgroundImage: `url(${damaNegro})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  slide3: {
    backgroundImage: `url(${ropaNegro})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

function DemoAutoPlay() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div style={styles.root}>
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        <div style={{ ...styles.slide, ...styles.slide1 }}>
          {/* Aqui va texto */}
        </div>
        <div style={{ ...styles.slide, ...styles.slide2 }}>
          {/* Aqui va texto */}
        </div>
        <div style={{ ...styles.slide, ...styles.slide3 }}>
          {/* Aqui va texto */}
        </div>
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default DemoAutoPlay;
