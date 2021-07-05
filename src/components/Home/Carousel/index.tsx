import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/image";
import  "../../../css/carousel.css";
import { FaLandmark, FaEye } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
//import CSS from "csstype";

function showCampaignDetails(camp: Props){
  console.log(camp.campanhas[0]);
}

interface Props {
  campanhas: {}[]
}
export default function Carousel(listaCampanhas: Props) {
  let settings = {
    dot:true,
    infinite:true,
    speed:400,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
  }
  return (
    <>
      <Slider {...settings} className="carousel">
        {listaCampanhas.campanhas.map((campanha: any = {}) => (
        <div className="card-wrapper" key={campanha.id}>
          <div className="card" onClick={ e => showCampaignDetails(listaCampanhas)}>
            <div className="card-image">
              <Image src={`https://fazumbem.inf.ufsm.br/images/entidades/${campanha.picture_url}.png`}/>
            </div>
            <ul className="icons">
              <li>
                <a href="/">
                  <i>
                    <IconButton 
                      aria-label="info" 
                      icon={<InfoIcon />}  
                      _hover={{ 
                        bgColor: "bluish.400", 
                        transition: "0.2s"
                      }} 
                    />
                  </i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i>
                    <IconButton 
                      aria-label="institute" 
                      icon={<FaLandmark />}  
                      _hover={{ 
                        bgColor: "bluish.400", 
                        transition: "0.2s"
                      }} 
                      />
                  </i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>{ campanha.title }</h2>
            </div>
          </div>
        </div>))}
        
        <div className="card-wrapper" key="more">
          <div className="card" onClick={ e => showCampaignDetails(listaCampanhas)}>
            <div className="card-image-more">
              <Image filter="blur(4px);" src={`https://fazumbem.inf.ufsm.br/images/entidades/${15}.png`}/>
              <div className="more-details">
                <h2>VER MAIS CAMPANHAS <FaEye /></h2> 
              </div>
            </div>
          </div>
        </div>      
      </Slider>
    </>
  );
}