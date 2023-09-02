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
          <div className='company'>Google</div>
          <div className='company'>Apple</div>
          <div className='company'>Facebook</div>
          <div className='company'>Sony</div>
          <div className='company'>Dell</div>
          <div className='company'>Microsoft</div>
        </div>

      </div>
      <div id="app-reviews-container">
        <div id="app-reviews-inner-container">
          <h2>Reviews</h2>
          <div className="review">
            <p>"This conference was amazing to be at, and I loved meeting so many people."
            </p>
          </div>
          <div className="review">
            <p>"I really enjoyed getting a sneak peek at the latest inventions."
            </p>
          </div>
          <div className="review">
            <p>"This is THE conference to go to if you want the latest and greatest in technology on top of meeting the next in line to pioneer the future."
            </p>
          </div>
        </div>


      </div>
      <div id="app-tickets-container">
        <h2>Tickets</h2>
        <div id="ticket-info-container">
          <div className="ticket-card">
            <div className='ticket-info'>
              <h3>Standard</h3>
              <p className='ticket-price'>$29.99</p>
              <p>Access to all venues</p>
              <p>General Parking</p>
            </div>
            <button>Buy</button>
          </div>
          <div className="ticket-card">
            <div className='ticket-info'>
              <h3>VIP</h3>
              <p className='ticket-price'>$99.99</p>
              <p>Access to all venues</p>
              <p>VIP Parking</p>
              <p>Access to VIP guest rooms</p>
              <p>10% discount on all items</p>
            </div>
            <button>Buy</button>
          </div>


        </div>

      </div>
      <div id="app-footer-container">
        <a href="">Chazz Carrizales</a>
        <a href="https://www.linkedin.com/in/chazz-carrizales/" target='_blank'>LinkedIn</a>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Affiliates</a>
        <a href="">Contact</a>
      </div>
    </>
  )
}

export default App
