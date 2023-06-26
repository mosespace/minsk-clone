import React from 'react'

export default function Footer() {
  return (
    <section>
    <div className="footer">
    <a href="#" className="logo"><img src='https://assets.website-files.com/64183a818a4da828b83b4a85/6418431d8b63796f529bc836_minsk_logo.svg'/></a>
           
            <div className="column1">
                <h1>Links</h1>
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div className="column2">
                <h1>Socials</h1>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
            </div>
        
    </div>
    <div className="subfooter">
            <p>Powerd By <a href="#/">Webflow</a></p>
            <p>Built By <a href="#/">Meta One</a></p>
            <div className="close-each">
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms Of Service</a>
            </div>
    </div>
    </section>
  )
}
