import React from 'react';
import './skills.css';
import image1 from '../../assets/mtdsida.png';
import image2 from '../../assets/3cantsida.png';
import image3 from '../../assets/rev1.png';
import image4 from '../../assets/rev2.png';
import image5 from '../../assets/svartsosida.png';

import ivr from '../../assets/ivr.png';

const Skills = () => {
    return (
        <section id='skills'>
            <div className='skillTitle'>Välkommen till Aerocapture Productions!</div>
            <p className='info'> Tack för att du väljer Aerocapture Productions! Vi är en förening som 
                har skapats för att hjälpa mindre företag och föreningar att uppfylla sina önskningar 
                om att synas digitalt och presenteras på ett professionellt sätt! Med våra tjänster 
                inom webbdesign, video och drönarfotografi erbjuder vi allt som behövs för att ni ska 
                kunna sticka ut och synas i den digitala världen! Vi har alltid levererat till nöjda 
                kunder och hoppas kunna samarbeta med fler där ute som delar vår passion för webbplatser. 
                Kontakta oss via formuläret för att diskutera arbetsmöjligheter.

            </p>
                 <div class="collage-container">
                    <img src={image1} alt="Imagur" class="collage-image" id="img1"></img>
                    <img src={image2} alt="Ima" class="collage-image" id="img2"></img>
                    <img src={image3} alt="Imaasd" class="collage-image" id="img3"></img>
                    <img src={image4} alt="Imagefa" class="collage-image" id="img4"></img>
                    <img src={image5} alt="Imaadkv" class="collage-image" id="img5"></img>
                </div>
            <div className='bars'>
                <div className='bar hideelement'>
                    Vår vision
                    <p>
                    Vi jobbar för att våra kunder ska kunna presentera sitt företag på ett snyggt 
                    och professionellt sätt till ett överkomligt pris. Vi inser vikten av att synas 
                    och sticka ut i dagens digitala värld för att kunna växa och utvecklas. Vi tror på 
                    att kombinera teknisk och kreativ expertis för att skapa resultat som inte bara uppfyller, 
                    men överträffar våra kunders förväntningar. 
                    </p><br /><br />
                    Om mig själv
                    <p>
                    Hej hej! Jag heter Ivar Gavelin och är grundare och ordförande för Aerocapture Productions. 
                    Jag är en femte års civilingenjörsstudent inom Informations- & Medieteknik där jag har utvecklat 
                    mina kunskaper inom bland annat webbdesign. Jag startade denna förening som ett sätt att förvandla 
                    min passion för webbdesign och fotografi till en möjlighet att hjälpa andra och är väldigt glad över 
                    att kunna applicera mina kunskaper i praktiken!
                    </p><br /><br />
                </div>
                <div class='bar2'>
                    <div id='row1'> <img src={ivr} alt="ivrr" id="ivr"></img>  </div>
                    <div id='row2'>
                        Vår mission
                        <p> Vi vill erbjuda prisvärda och högkvalitativa tjänster till våra kunder för att hjälpa 
                            dem hitta sin väg till professionalitet i den digitala världen. Hemsidor som sticker ut, 
                            fångar användarens intresse och får dem att se ut som coolast i stan är vad vi strävar efter!
                        </p>
                    </div>   
                 </div> 
            </div>
            <span class='lastP'>Vi ser fram emot att samarbeta med dig och skapa något fantastiskt tillsammans!</span>
        </section>
    );
}

export default Skills;