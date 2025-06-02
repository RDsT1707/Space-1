import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home grid container">
      <div className="home-content grid">
        <div className="flow">
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
          </h1>
          <h2 className="fs-900 ff-serif uppercase">Space</h2>
          <p className="home-text">
            Let's face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we'll give you a truly out of this world experience!
          </p>
        </div>
        <div>
          <Link 
            to="/destination" 
            className="large-button uppercase ff-serif text-dark bg-white"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;