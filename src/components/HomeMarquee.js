import React from "react";
import Marquee from "react-fast-marquee";
import b01 from "../assets/img/marquee/b01.jpg";
import b02 from "../assets/img/marquee/b02.jpg";
import b03 from "../assets/img/marquee/b03.jpg";
import b04 from "../assets/img/marquee/b04.jpg";
import b05 from "../assets/img/marquee/b05.jpg";
import b06 from "../assets/img/marquee/b06.jpg";
import b07 from "../assets/img/marquee/b07.jpg";
import b08 from "../assets/img/marquee/b08.jpg";
import p01 from "../assets/img/marquee/p01.jpg";
import p02 from "../assets/img/marquee/p02.jpg";
import p03 from "../assets/img/marquee/p03.jpg";
import p04 from "../assets/img/marquee/p04.jpg";
import p05 from "../assets/img/marquee/p05.jpg";
import p06 from "../assets/img/marquee/p06.jpg";
import p07 from "../assets/img/marquee/p07.jpg";
import p08 from "../assets/img/marquee/p08.jpg";
import pv01 from "../assets/img/marquee/pv01.jpg";
import pv02 from "../assets/img/marquee/pv02.jpg";
import pv03 from "../assets/img/marquee/pv03.jpg";
import pv04 from "../assets/img/marquee/pv04.jpg";
import pv05 from "../assets/img/marquee/pv05.jpg";
import pv06 from "../assets/img/marquee/pv06.jpg";
import pv07 from "../assets/img/marquee/pv07.jpg";
import pv08 from "../assets/img/marquee/pv08.jpg";

const HomeMarquee = () => {
  const marquee01 = [
    {
      id: 1,
      imgName: b01,
    },
    {
      id: 2,
      imgName: p01,
    },
    {
      id: 3,
      imgName: pv01,
    },
    {
      id: 4,
      imgName: b02,
    },
    {
      id: 5,
      imgName: p02,
    },
    {
      id: 6,
      imgName: pv02,
    },
    {
      id: 7,
      imgName: b03,
    },
    {
      id: 8,
      imgName: p03,
    },
    {
      id: 9,
      imgName: pv03,
    },
    {
      id: 10,
      imgName: b04,
    },
    {
      id: 11,
      imgName: p04,
    },
    {
      id: 12,
      imgName: pv04,
    },
  ];

  const marquee02 = [
    {
      id: 1,
      imgName: b05,
    },
    {
      id: 2,
      imgName: p05,
    },
    {
      id: 3,
      imgName: pv05,
    },
    {
      id: 4,
      imgName: b06,
    },
    {
      id: 5,
      imgName: p06,
    },
    {
      id: 6,
      imgName: pv06,
    },
    {
      id: 7,
      imgName: b07,
    },
    {
      id: 8,
      imgName: p07,
    },
    {
      id: 9,
      imgName: pv07,
    },
    {
      id: 10,
      imgName: b08,
    },
    {
      id: 11,
      imgName: p08,
    },
    {
      id: 12,
      imgName: pv08,
    },
  ];

  return (
    <div>
      <Marquee
        className="postMarquee mb-2"
        behavior="scroll"
        width="100%"
        direction="right"
        height="270px"
        scrollamount="2"
        pauseOnHover="true"
        speed="25"
      >
        {marquee01.map((itemmarquee) => (
          <figure key={itemmarquee.id}>
            <img src={itemmarquee.imgName} alt={itemmarquee.imgName} />
          </figure>
        ))}
      </Marquee>

      <Marquee
        className="postMarquee"
        behavior="scroll"
        width="100%"
        direction="left"
        height="270px"
        scrollamount="2"
        pauseOnHover="true"
        speed="25"
      >
        {marquee02.map((itemmarquee2) => (
          <figure key={itemmarquee2.id}>
            <img src={itemmarquee2.imgName} alt={itemmarquee2.imgName} />
          </figure>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
