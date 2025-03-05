import '../css/home.css';
import Carousel from '../components/Carousel';
import background from '../assets/background.png'

export default function Home() {
  return (
    <>
      <div className="home" >
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur
          ducimus sed fugit eius voluptatem consequuntur amet minus vel eum
          praesentium quo, quaerat necessitatibus harum eveniet suscipit minima
          impedit. Explicabo? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Neque ut magnam sed harum facilis eveniet nihil
          fugit fuga, exercitationem ea dolore quia mollitia esse! Veniam
          numquam a velit necessitatibus laudantium?
          impedit. Explicabo? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Neque ut magnam sed harum facilis eveniet nihil
          fugit fuga, exercitationem ea dolore quia mollitia esse! Veniam
          numquam a velit necessitatibus laudantium?
        </p>
      </div>     
        {/* <img src={background} alt="image" /> */}
        coucou
  
        <Carousel />
    </>
  );
}
