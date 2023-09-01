import './App.css'

function App() {

  return (
    <>
      <div id='app-hero-container'>
        <h1 className='app-hero-h1'>Tech Conference</h1>
        <p>This is a description of the conference here! We really hope you all can come to engage in some amazing, forward-thinking tech that we all get to show off.</p>
        <button>Get Tickets</button>
      </div>
      <div id='app-about-container'>
        <div id='app-about-inner-container'>
          <h2>About Us</h2>
          <p>This is a description of the about us here! We really hope you all can come to engage in some amazing, forward-thinking tech that we all get to show off. Here’s some more placeholder text so you can understand more about what we do, what we want, and how we can get you to want to buy some tickets for our little old conference!</p>
        </div>
      </div>
      <div id='app-companies-container'>
        <h2>Companies</h2>
        <div id='all-companies'>
        <div className='company'>Company</div>
        <div className='company'>Company</div>
        <div className='company'>Company</div>
        <div className='company'>Company</div>
        <div className='company'>Company</div>
        <div className='company'>Company</div>
        </div>
        
      </div>
      <div id="app-reviews-container">
        <div id="app-reviews-inner-container">
        <h2>Reviews</h2>
        <div className="review">
          <p>"Stuff about things and such."
          </p>
        </div>
        <div className="review">
          <p>"Stuff about things and such."
          </p>
        </div>
        <div className="review">
          <p>"Stuff about things and such."
          </p>
        </div>
        </div>
        
       
      </div>
      <div id="app-tickets-container">
        <h2>Tickets</h2>
        <div id="ticket-info-container">
        <div className='ticket-info'>
        <h3>Standard</h3>
        <p>Price</p>
        <p>Some stuff and stuff.</p>
      </div>
      <div className='ticket-info'>
        <h3>VIP</h3>
        <p>Price</p>
        <p>Some stuff and stuff.</p>
      </div>
        </div>
      
      </div>
      <div id="app-footer-container">
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </div>
    </>
  )
}

export default App
