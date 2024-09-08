import './HowItWorks.css'

function HowItWorks() {
  return (
    <div className='how-it-works-container'>
        <div className="how-it-works-image">
            <img className="bottom-image" src="/assets/How it works_.png" alt="" />
            <img className="top-image" src="/assets/How it works_ (1).png" alt="" />
        </div>
        <div>
            <img className="base-image" src="/assets/Group 2.png" alt="" />
            <div className='video-container'>
              <div className='video-1'>
                <iframe 
                  className="video-element"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/7MDlK8DBtbo" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <img src="/assets/For Creators.png" alt="" className='creator-image'/>
              </div>
              <div className='video-2'>
                <iframe 
                  className="video-element"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/hXAC8lIgMr8" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <img src="/assets/For Supporters.png" alt="" className='supporter-image'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks;
