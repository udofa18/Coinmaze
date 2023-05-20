import React from 'react'
import "./footer.css"
import '@fortawesome/fontawesome-free/css/all.css'


const Footer = () => {
  return (
    <div>
    <footer className="footer-distributed">

<div className="footer-left">

<div>
        <h1 style={{}}>
        <i className="fas fa-coins"></i>

          Coin<span style={{ color: "gold" }}>Maze</span>
        </h1>
      </div>

    <p className="footer-links">
        <a href="#" className="link-1">Home</a>
        
        <a href="#">Blog</a>
    
        <a href="#">Pricing</a>
    
        <a href="#">About</a>
        
        <a href="#">Faq</a>
        
        <a href="#">Contact</a>
    </p>

    <p className="footer-company-name">Company Name © 2015</p>
</div>

<div className="footer-center">

    <div>
        <i style={{color:"gold"}} className="fa fa-map-marker"></i>
        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
    </div>

    <div>
        <i style={{color:"gold"}} className="fa fa-phone"></i>
        <p>+1.555.555.5555</p>
    </div>

    <div>
        <i style={{color:"gold"}} className="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div className="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div>

</div>

</footer>
    </div>
  )
}

export default Footer