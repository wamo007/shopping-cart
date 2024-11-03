import { Link } from 'react-router-dom';
import Nav from './Header';

function Home() {

  return (
    <>
      <Nav />
      <div className="main">
        <div className="call-to-action">
          <h1>Welcome to UbiTechy!</h1>
          <h2>The Best Tech Store in Town!</h2>
          <p>
            What is it gonna be today? RAM? CPU? GPU? Power Supply? 
            Case? Mouse, keyboard, or even a figurine 
            to cheer you up in the tough match??? No time to explain!
          </p>
          <Link className='action' to='shop'>SHOP NOW</Link>
        </div>
      </div>
    </>
  )
}

export default Home;
