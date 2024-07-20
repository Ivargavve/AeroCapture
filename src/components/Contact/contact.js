import React from "react";
import './contact.css';
import FacebookIcon from '../../assets/fb.png';
import InstagramIcon from '../../assets/ig.png';
import YoutubeIcon from '../../assets/yt.png';
import client1 from '../../assets/skurkeriet.jpeg';
import client2 from '../../assets/tryckbar.png';
import client3 from '../../assets/3cant.jpeg';
import client4 from '../../assets/foset.avif';
import client5 from '../../assets/liu.jpeg';
import client6 from '../../assets/mtd.png';

const Contact = () => {
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
                <h1 className="contactPageTitle">Ta kontakt med oss!</h1>
                <span className="contactDesc">Fyll i formuläret nedan för att diskutera eventuella arbetsmöjligheter.</span>
                <form className="contactForm" action="https://formsubmit.co/37963975c18a537aa61345160a069f5b" method="POST">
                    <input type="text" className="name" placeholder="namn" name="name" required></input>
                    <input type="email" className="email" placeholder="email" name="email" required></input>
                    <textarea className="msg" name="message" rows={5} placeholder="meddelande" required></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_template" value="table"></input>
                    <button className="submitBtn">Skicka</button>
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