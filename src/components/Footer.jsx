import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaPhone, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.scss"; 

const Footer = () => {
  return (
    <>
        <footer className="footer">
      <div className="container">
        {/* Left Section */}
        <div className="section">
          <h3 >BHARAT CERTIS AGRISCIENCE LTD.</h3>
          <p className='mt-10'>
            In tune with ‘Small is Beautiful and Bountiful’, the farsighted entrepreneur Mr. S. N Gupta set up a 
            proprietorship firm in 1977 to manufacture just two pesticide formulations. In due course, the seeds 
            sown by him sprouted and the tiny company grew to be among the leaders in the industry of pesticides.
          </p>
        </div>

        {/* Middle Section - Contact */}
        <div className="section">
          <h3>GET IN TOUCH</h3>
          <p className='mt-10'><FaMapMarkerAlt /> Office Unit 301, 3rd Floor, Worldmark 3, Asset No.7, Hospitality District, Aerocity, NH-8, New Delhi - 110037</p>
          <p className='mt-3'><FaEnvelope /> info@bharatcertis.com</p>
          <p className='mt-3'><FaGlobe /> <Link href="http://www.bharatcertis.com">www.bharatcertis.com</Link></p>
          <p className='mt-3'><FaPhone /> +91-11-42262100</p>
          <p className='mt-3'><FaWhatsapp /> Bharat Certis Krishi Samadhan: +91 8882 426 426</p>
        </div>

        {/* Quick Links */}
        <div className="section">
          <h3>QUICK LINKS</h3>
          <ul className='mt-10'>
            <li><Link href="#">Home</Link></li>
            <li className='mt-3'><Link href="#">Overview</Link></li>
            <li className='mt-3'><Link href="#">Promoters & Leadership</Link></li>
            <li className='mt-3'><Link href="#">Products</Link></li>
            <li className='mt-3'><Link href="#">Manufacturing</Link></li>
            <li className='mt-3'><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Career Section */}
        <div className="section">
          <h3>CAREER</h3>
          <ul className='mt-10'>
            <li className='mt-3'><Link href="#">Work With Us</Link></li>
            <li className='mt-3'><Link href="#">Our People Strength</Link></li>
            <li className='mt-3'><Link href="#">Apply Now</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <p>Copyright 2022 Bharat Certis AgriScience Ltd. All Rights Reserved.</p>
        <p>Powered by Buffet Creations</p>
        <p><Link href="#">Privacy Policy</Link></p>
      </div>
    </footer>
    </>
  )
}

export default Footer