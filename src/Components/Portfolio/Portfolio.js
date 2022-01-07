import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  Box,
  BoxImg,
  Overlay,
  OverlaySpan,
} from "./style.js";

function Portfolio() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);

  const PortfolioImages = images.map((ele) => {
    return (
      <Box key={ele.id}>
        <BoxImg src={ele.image} alt="" />
        <Overlay className="overlay">
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </Box>
    );
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div>{PortfolioImages}</div>
    </PortfolioSection>
  );
}

export default Portfolio;
