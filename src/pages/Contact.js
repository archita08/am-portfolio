import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Archita Malviya via email @ archi.m8@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      {/* <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div> */}
      <div>
        <div><strong><span style={{fontSize: '18pt'}}>Let&rsquo;s Build Your Next Success Story</span></strong><span style={{fontSize: '11pt'}}></span><strong><span style={{fontSize: '11pt'}}></span></strong></div>
        <span style={{fontSize: '12pt'}}>Ready to supercharge your content, SEO, and growth? I&rsquo;d love to hear about your goals and explore how we can work together.</span>
        <br/>
        <br/>
        <p>
          <strong><span style={{fontSize: '12pt'}}>Contact Info:</span></strong>
          <ul>
            <li><span style={{fontSize: '12pt'}}>&nbsp;✉️ <EmailLink /></span></li>
            <li><span style={{fontSize: '12pt'}}>&nbsp;📱 +91 97543 14991</span></li>
            <li><a href="https://www.linkedin.com/in/archita-m-936388229" target={'_blank'}><span style={{fontSize: '12pt', cursor: 'pointer'}}>&nbsp;🔗 My LinkedIn Profile</span></a></li>
            <li><a href='https://calendly.com/archi-m8/30min' target={'_blank'}><span style={{fontSize: '12pt', cursor: 'pointer'}}>&nbsp;📅 Book a Call</span></a></li>
          </ul>
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
