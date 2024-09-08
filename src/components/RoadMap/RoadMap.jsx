import './RoadMap.css';

function Roadmap() {  
    return (
      <div className="roadmap-container">
        <h1 className="roadmap-title">GAME PLAN</h1>
  
        <div className="boxes-container">
          <div className="roadmap-box">
            <img src="public\assets\Group 25 (1).png" alt="" className='engagment-image'/>
          </div>
          <div  className="roadmap-box">
            <img src="public\assets\Group 26.png" alt="" className='engagment-image'/>
          </div>
          <div className="roadmap-box">
          <img src="public\assets\Group 27.png" alt="" className='engagment-image'/>
          </div>
        </div>
  
        {/* Overlaying the strips */}
        <div className="strips-container">
          <img src="public\assets\Group 6.png" alt="Black Strip 1" className="black-strip-1" />
          <img src="public\assets\Group 3.png" alt="Yellow Strip 1" className="yellow-strip-1" />
          <img src="public\assets\Group 4.png" alt="Black Strip 2" className="black-strip-2" />
          <img src="public\assets\Group 5.png" alt="Yellow Strip 2" className="yellow-strip-2" />
        </div>
      </div>
    );
  };
  
  export default Roadmap;