import Carousel from "react-elastic-carousel";
import './Award.css'
import Item from "./Item";
import award1 from '../../assets/img/wall of frame/award1.png'
import award2 from '../../assets/img/wall of frame/award2.png'
import award3 from '../../assets/img/wall of frame/award3.png'
import award4 from '../../assets/img/wall of frame/award4.png'


const breakPoints = [
  { width: 1, itemsToShow: 1 ,itemsToScroll: 1,pagination:false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 }
];

const images = [
    {
      imgPath : award1,
    },
    {
      imgPath: award2
    },
    {
        imgPath: award3
      },
      {
        imgPath: award4
      },
      {
        imgPath: award1
      },
      {
        imgPath: award2
      },
      {
        imgPath: award3
      },
      {
        imgPath: award4
      },
  ];
function Award() {
  return (
    <>
    <div className="counter__container">
    <div class="section-title">
            <h2> Wall Of Fame</h2>
        </div>
            <p className="Award__para">All Roads That to succes have to pass through hard work boulevard,at some point of time.</p>
    
    {/* <div className="Award__MainHeading">
            <h1>
            Wall Of Fame
            </h1>
          <p>All Roads That to succes have to pass through hard work boulevard,at some point of time.</p>
        </div> */}
      <div className="carousel-wrapper">
        <Carousel itemsToScroll={3}  breakPoints={breakPoints}  infiniteLoop={true} enableAutoPlay autoPlaySpeed={3000} enableSwipe="true" transitionMs="500">
          {images.map((item,indx) => (
            <Item key={indx}><div className="award__cardContainer">
                <img className="award__img" src={item.imgPath} alt={indx} />
                </div></Item>
          ))}
        </Carousel>
      </div>
      </div>
    </>
  );
}

export default Award;