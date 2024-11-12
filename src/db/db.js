import riceImg from "../images/rice.png";
import noodleImg from "../images/noodle.png";
import onigiriImg from "../images/onigiri.png";
import shrimpImg from "../images/shrimp.png";
import eggImg from "../images/egg.png";
import ballsImg from "../images/balls.png";
import popImg from "../images/pop.png";
import smoreImg from "../images/smore.png";
import cookieImg from "../images/cookies.png";
import potatoImg from "../images/jacketpotato.png";
import potato1Img from "../images/potato1.png";
import potato2Img from "../images/potato2.png";
import potato3Img from "../images/potato3.png";

export function getData() {
  return [
    { title: "Meteorice", price: 17.99, Image: riceImg, id: 1 },
    { title: "Focal Chilli Noodles", price: 15, Image: noodleImg, id: 2 },
    { title: "Menbosha", price: 3.5, Image: shrimpImg, id: 3 },
    { title: "The Illuminigiri", price: 13.99, Image: onigiriImg, id: 4 },
    { title: "Deviled Egg", price: 2.5, Image: eggImg, id: 5 },
    { title: "Big Bang", price: 0.99, Image: ballsImg, id: 6 },
    { title: "Planet Pop", price: 2.99, Image: popImg, id: 7 },
    { title: "S'more", price: 2.99, Image: smoreImg, id: 8 },
    { title: "Cookietron", price: 2.99, Image: cookieImg, id: 9 },
    { title: "Asteroid Munch", price: 2.99, Image: potatoImg, id: 10 },
    { title: "Corn Cheese", price: 2.99, Image: potato1Img, id: 11 },
    { title: "Minced Pork", price: 2.99, Image: potato2Img, id: 12 },
    { title: "Tuna Mayo", price: 2.99, Image: potato3Img, id: 13 },
  ];
}
