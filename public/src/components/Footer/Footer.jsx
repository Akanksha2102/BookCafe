import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-3">
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
            <p>
              <a href="https://www.google.co.in/maps/place/New+Delhi,+Delhi/@28.5272803,77.0688994,11z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212">New Delhi, India</a>
            </p>
          </div>

        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <p>
              Email: abc@gmail.com
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-clock icon"></i>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Follow Us</h4>
          <div class="social-links d-flex">
            <a href="https://twitter.com/Ankiitta___" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100061271214054" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/ankiitta___/" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/ankita-sahoo-b99420249" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>BookCafe</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
      </div>
    </div>

  </footer>
  )
}

export default Footer