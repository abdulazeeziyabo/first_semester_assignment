import React from 'react'
import './App.css';

function App() {
  return (
    <>
      {/* Hero section */}
      <section className='hero-section'>
        <div className='nav-container'>
          <img
            src='/assets/Logo.png'
            alt='Nav-logo Image'
            className='nav-logo'
          />
          {/* <i class="fa-solid fa-bars"></i> */}
          <p className='nav-url'>My URLs</p>
          <p className='nav-features'>
            <a href='#Why-scissor'>
              Features <img 
              src='/assets/Vector.png' 
              alt='Arrow down' />
            </a>
          </p>
          <p className='nav-pricing'>
            <a href='#price'>Pricing</a>
          </p>
          <p className='nav-analytics'>Analytics</p>
          <p>
            <a href='#FAQ'>FAQs</a>
          </p>
          <a href='' className='nav-login'>
            Login
          </a>
          <a href='#free' className='nav-free'>
            Try for free
          </a>
        </div>
        <main>
          <p className='optimize'>
            Optimize Your Online Experience with Our Advanced{" "}
            <span>URL Shortening</span> Solution
          </p>
          <img src='/assets/Vector 3.png' alt='Vector' width='164px' />
        </main>
        <div className='personalize'>
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>
        <div className='btn'>
          <span className='signup-btn'>Sign up</span>
          <span className='more-btn'>Learn more</span>
        </div>
        <div>
          <img src='/assets/Group 2.png' 
          alt='Box' className='group' />
        </div>
        <div>
          <img
            src='./assets/Rectangle 9.png'
            alt='A rectangular image'
            className='rectangle'
            width='1200px'
            height='84px'
          />
          <img
            src='/assets/Ellipse 1.png'
            alt='An ellipse'
            className='ellipse'
          />
        </div>
      </section>
      {/* Desktop Section */}
      <section>
        <div className='desktop-header'>
          <div className='desktop-container'>
            <p>
              One Stop. <br />
              Four <strong>Possibilities</strong>.
            </p>
            <p className='box'>
              3M <br />
              <span>Active users</span>
            </p>
            <p className='box'>
              60M <br />
              <span>Links &amp; QR codes created</span>
            </p>
            <p className='box'>
              1M <br />
              <span>Clicked &amp; Scanned connections</span>
            </p>
            <p className='box'>
              300K <br />
              <span>App Integrations</span>
            </p>
          </div>
        </div>
        <div className='choose'>
          <h2>
            <img
              src='./assets/Line 70.png'
              alt='A line image'
              className='line'
              id='Why-scissor'
            />
            Why choose
            <strong>Scissors</strong>
          </h2>
          <p className='choose-body'>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
        <div className='scissor-container'>
          <div>
            <img
              src='./assets/Ellipse 2.svg'
              alt='Image of a small circle'
              className='scissor-ellipse'
            />
            <img
              src='./assets/link-2.png'
              alt=''
              width='24px'
              className='scissor-image'
            />
            <h3>URL Shortening</h3>
            <p>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
          <div>
            <img
              src='./assets/Ellipse 2.svg'
              alt=''
              className='scissor-ellipse'
            />
            <img src='/assets/edit.png' alt='' className='scissor-image' />
            <h3>Custom URLs</h3>
            <p>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
          <div>
            <img
              src='./assets/Ellipse 2.svg'
              alt=''
              className='scissor-ellipse'
            />
            <img src='/assets/grid.png' alt='' className='scissor-image' />
            <h3>QR Codes</h3>
            <p>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>
          <div>
            <img
              src='./assets/Ellipse 2.svg'
              alt=''
              className='scissor-ellipse'
            />
            <img src='/assets/activity.png' alt='' className='scissor-image' />
            <h3>Data Analytics</h3>
            <p>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </section>
      {/* Price Section */}
      <section>
        <div className='price-header'>
          <p>
            <img src='./assets/line 70.png' id='price' />A{" "}
            <span>price perfect</span> for your needs.
          </p>
          <p>
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
        <div className='basic-container'>
          <div className='basic-wrapper basic'>
            <p>Basic</p>
            <h4>Free</h4>
            <p>Free plan for all users</p>
            <p>
              <img src='./assets/check-circle.png' />
              Unlimited URL Shortening
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              Basic Link Analytics
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              Customizable Short Links
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              Standard Support
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              Ad-supported
            </p>
          </div>
          <div className='basic-wrapper teams' id='teams'>
            <p>Teams</p>
            <h4>$25/month</h4>
            <p>Share with up to 10 users</p>
            <p>
              <img src='./assets/check-circle.png' />
              Team Collaboration
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              User Roles and Permissions
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              Enhanced Security
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              API Access
            </p>
            <p>
              <img src='./assets/check-circle.png' />
              Dedicated Account Manager
            </p>
          </div>
        </div>
        <div className='basic-wrapper professional'>
          <p>Professional</p>
          <h4>$15/month</h4>
          <p>Ideal for business creators</p>
          <p>
            <img src='./assets/check-circle2.svg' />
            Team Enhanced Link Analytics
          </p>
          <p>
            <img src='./assets/check-circle2.svg' />
            Custom Branded Domains
          </p>
          <p>
            <img src='./assets/check-circle2.svg' />
            Advanced Link Customization
          </p>
          <p>
            <img src='./assets/check-circle2.svg' />
            Priority Support
          </p>
          <p>
            <img src='./assets/check-circle2.svg' />
            Ad-free Experience
          </p>
        </div>
        <div className='price-ctn'>
          <p>Get Custom Pricing</p>
          <p>Select Pricing</p>
        </div>
      </section>
      {/* FAQs Section */}
      <section>
        <div className='faqs-header'>
          <img src='./assets/Group 3.png' className='group3' />
          <img src='./assets/Group 2 (1).png' className='group2' />
          <div className='faqs-wrapper' id='free'>
            <p>Paste URL here...</p>
            <span id='domain'>
              Choose Domain <img src='./assets/Vector1.svg' />
            </span>
            <span>Type Alias here</span>
            <p>
              Trim URL{" "}
              <img src='./assets/magic wand.png' alt='Image of magic wand' />
            </p>
            <p>
              By clicking TrimURL, I agree to the Terms of Service, Privacy
              Policy and Use of Cookies.
            </p>
          </div>
        </div>
        <div className='faqs-container'>
          <div className='faqs'>
            <p>
              <img src='./assets/Line 70.png' alt='' id='FAQ' />
              FAQs
            </p>
          </div>
          <div className='faqs-body'>
            <p>
              How does URL shortening work?
              <img src='./assets/minus.png' alt='Minus image' />
            </p>
            <p>
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </p>
            <p>
              Is it necessary to create an account to use the URL shortening
              service?
              <img src='./assets/plus.png' alt='' />
            </p>
            <p>
              Are the shortened links permanent? Will they expire?
              <img src='./assets/plus.png' alt='' />
            </p>
            <p>
              Are there any limitations on the number of URLs I can shorten?
              <img src='./assets/plus.png' alt='' />
            </p>
            <p>
              Can I customize the shortened URLs to reflect my brand or content?
              <img src='./assets/plus.png' alt='' />
            </p>
            <p>
              Can I track the performance of my shortened URLs?
              <img src='./assets/plus.png' alt='' />
            </p>
            <p>
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?
              <img src='./assets/plus.png' alt='' />
            </p>
            <p>
              What is a QR code and what can it do?
              <img src='./assets/plus.png' alt='' />
            </p>
            <p>
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?
              <img src='./assets/plus.png' alt='' />
            </p>
            <img src='./assets/Group 3 (1).png' className='faqs-body-image' />
            <img src='./assets/Group 2 (2).png' className='faqs-body-image1' />
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <section>
        <div className='footer'>
          <div className='rev'>
            <h3>Revolutionizing Link Optimization</h3>
            <p>Get Started</p>
          </div>
          <div>
            <img src='./assets/Group 3 (2).png' className='footer-image1' />
            <img src='./assets/Group 2 (3).png' className='footer-image2' />
          </div>
        </div>
        <div className='footer-wrapper'>
          <div>
            <div className='footer-logo'>
              <img src='./assets/Logo (1).png' />
            </div>
            <div className='footer-socials'>
              <img src='./assets/i.fi-social-twitter.png' alt='' />
              <img src='./assets/svg.feather.png' alt='' />
              <img src='./assets/i.fi-social-linkedin.png' alt='' />
              <img src='./assets/i.fi-social-facebook.png' alt='' />
            </div>
          </div>
          <div className='footer-body'>
            <div>
              <h4>Why Scissor ?</h4>
              <p>Scissor 101 Integrations &amp; API Pricing</p>
            </div>
            <div>
              <h4>Solutions</h4>
              <p>
                Social Media Digital Marketing Customer Service For Developers
              </p>
            </div>
            <div>
              <h4>Products</h4>
              <p>Link Management QR Codes Link-in-bio</p>
            </div>
            <div>
              <h4>Company</h4>
              <p>About Scissor Careers Partners Press Contact Reviews</p>
            </div>
            <div>
              <h4>Resources</h4>
              <p>
                Blog Resource Library Developers App Connectors Support Trust
                Center Browser Extension Mobile App
              </p>
            </div>
            <div>
              <h4>Features</h4>
              <p>
                Branded Links Mobile Links Campaign Management &amp; Analytics
                QR Code generation
              </p>
            </div>
            <div>
              <h4>Legal</h4>
              <p>
                Privacy Policy Cookie Policy Terms of Service Acceptable Use
                Policy Code of Conduct
              </p>
            </div>
          </div>
        </div>
        <div className='footer-note'>
          <div>
            <p>
              Term of Service <img src='./assets/Vector 5.svg' alt='' />
            </p>
          </div>
          <div>
            <p>
              Security <img src='./assets/Vector 5.svg' alt='' />
            </p>
          </div>
          <div>
            <p>Scissor 2023</p>
          </div>
        </div>
        <div>
          <img src='./assets/Group 3 (3).png' className='footer-image3' />
          <img src='./assets/Group 2 (4).png' className='footer-image4' />
        </div>
      </section>
    </>
  );
}

export default App;
