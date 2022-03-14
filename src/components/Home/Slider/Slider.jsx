import React, { useEffect, useState } from "react";
import { images } from "../data";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { Wrapper } from "./styles";

const Slider = () => {
  const [current, setCurrent] = useState(images[0].id);

  const updateBg = () => {
    if (current > 3) {
      setCurrent(1);
      return;
    }
    setCurrent(current + 1);
  };

  const prevImg = () => {
    if (current < 2) {
      setCurrent(4);
      return;
    }
    setCurrent(current - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      updateBg();
    }, 3000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <Wrapper>
      {images.map(data => {
        if (data.id === current) {
          return <img key={data.id} src={data.url} />;
        }
      })}
      <ChevronLeftIcon className="Slider__IconLeft" onClick={prevImg} />
      <ChevronRightIcon className="Slider__IconRight" onClick={updateBg} />
    </Wrapper>
  );
};

export default Slider;
