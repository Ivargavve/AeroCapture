import React, { useRef } from "react";
import './contact.css';
import FacebookIcon from '../../assets/fb.png';
import InstagramIcon from '../../assets/ig.png';
import YoutubeIcon from '../../assets/yt.png';
import emailjs from '@emailjs/browser';
import client1 from '../../assets/skurkeriet.jpeg';
import client2 from '../../assets/tryckbar.png';
import client3 from '../../assets/3cant.jpeg';
import client4 from '../../assets/foset.avif';
import client5 from '../../assets/liu.jpeg';
import client6 from '../../assets/mtd.png';

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
                <div className="clientImgs">
                    <a href="https://www.facebook.com/Skurkeriet/?locale=sv_SE" ><img className="clientImg" src={client1} alt="client1" /></a>
                    <a href="https://www.facebook.com/tryckbar?locale=sv_SE" ><img className="clientImg" src={client2} alt="client2" /></a>
                    <a href="https://www.facebook.com/3Cant?locale=sv_SE" ><img className="clientImg" src={client3} alt="client3" /></a>
                    <a href="https://www.facebook.com/fosetkommiten?locale=sv_SE" ><img className="clientImg" src={client4} alt="client4" /></a>
                    <a href="https://liu.se/" ><img className="clientImg" src={client5} alt="client5" /></a>
                    <a href="https://www.medieteknikdagen.se/" ><img className="clientImg" src={client6} alt="client6" /></a>
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