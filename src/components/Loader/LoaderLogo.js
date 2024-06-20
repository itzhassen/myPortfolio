import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="handwritten_name"
        width="100%"
        height="100%"
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          d="M20 80 Q 40 10, 60 80 T 100 80 Q 120 10, 140 80 T 180 80 Q 200 10, 220 80 T 260 80 Q 280 10, 300 80 T 340 80 Q 360 10, 380 80 T 420 80 M450 80 Q 470 10, 490 80 T 530 80 Q 550 10, 570 80 T 610 80 Q 630 10, 650 80 T 690 80 Q 710 10, 730 80 T 770 80 Q 790 10, 810 80 T 850 80 Q 870 10, 890 80 T 930 80 Q 950 10, 970 80 T 1010 80 Q 1030 10, 1050 80 T 1090 80 Q 1110 10, 1130 80 T 1170 80 Q 1190 10, 1210 80"
          stroke={theme.body}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }
}

export default LogoLoader;
