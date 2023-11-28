import React, { useRef } from "react";
import './contact.css';
import FacebookIcon from '../../assets/fb.png';
import InstagramIcon from '../../assets/ig.png';
import YoutubeIcon from '../../assets/yt.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dqlv4rn', 'template_guhqwhe', form.current, 'vmIJdd50srSD5aC4b6MC8')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Our Clients</h1>
                <p className="clientDesc">We had the opportunity to work with a diverse group of companies.
                <br />Some of the notable companies We have worked ith includes</p>
                <div className="clientImgs">
                    img
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"></input>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"></input>
                    <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                    <button className="submitBtn" type="submit" value='Send'>Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/Wizzmiz1/" target="_blank" rel="noreferrer" className="alink"><img className="link" src={FacebookIcon} alt="Facebook Icon"></img></a>
                        <a href="https://www.instagram.com/aerocaptureproduction/" target="_blank" rel="noreferrer" className="alink"><img className="link" src={InstagramIcon} alt="Instagram Icon"></img></a>
                        <a href="https://www.youtube.com/@aerocapturep" target="_blank" rel="noreferrer" className="alink"><img className="link" src={YoutubeIcon} alt="Youtube Icon"></img></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;