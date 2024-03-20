import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Link to='/'>Go Back</Link>
      <a href='/'>
        <button type='button'>Home</button>
      </a>
    </div>
  );
};

export default About;
