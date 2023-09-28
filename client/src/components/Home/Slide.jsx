import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from "@mui/material";

// here react countdown
import Countdown from "react-countdown";

import { Link } from "react-router-dom";

// Responacive Carousel maneging here
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

//   herer handling the css of deal of the day block
const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
// here handling css of Timer
const Timer = styled(Box)`
  display: flex;
  margin-left: 15px;
  align-items: center;
  color: #7f7f7f;
`;

//  here handling deal Text css
const DealText = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  line-height: 30px;
`;
//  here handling Button css
//  const viewAllButton=styled(Button)`
//         margin-left:auto;
//  `
const Image = styled("img")({
  width: "auto",
  height: 150,
});
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="sapan">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer img" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <Button
          variant="contained"
          color="primary"
          style={{
            marginLeft: "auto",
            backgroundColor: "rgb(40,116,240)",
            borderRadius: "2px",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          View All
        </Button>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // containerClass="carousel-container"
      >
        {
        products.map((product) => (
          // here wrap all the product details in Router....
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};
export default Slide;
