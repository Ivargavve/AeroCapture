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
            <p className='info'> Vi är en passionerad förening specialiserad på att erbjuda högkvalitativa tjänster inom fotografering,
                 videoproduktion och hemsideskapande till företag och föreningar. Med en stark tro på kraften 
                 i visuellt innehåll strävar vi efter att hjälpa våra kunder att presentera 
                 sina varumärken på bästa möjliga sätt.
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
                    Vår vision är att förenkla och förbättra den digitala närvaron för företag och 
                    föreningar genom professionella och skräddarsydda lösningar. Vi tror på att kombinera 
                    kreativitet med teknisk expertis för att leverera resultat som inte bara uppfyller utan 
                    överträffar våra kunders förväntningar.
                    </p><br /><br />
                    Om mig själv
                    <p>
                    Jag heter Ivar Gavelin och är grundare och ordförande för Aerocapture Productions. 
                    Som student och entusiast inom fotografering och webbdesign startade jag denna förening 
                    för att förvandla min passion till en möjlighet att hjälpa andra. Genom Aerocapture Productions 
                    får jag chansen att dela min kreativitet och tekniska färdigheter för att stödja företag och 
                    föreningar i deras digitala resor.
                    </p><br /><br />
                </div>
                <div class='bar2'>
                    <div id='row1'> <img src={ivr} alt="ivrr" id="ivr"></img>  </div>
                    <div id='row2'>
                        Vår mission
                        <p> Vår mission är att erbjuda prisvärda, högkvalitativa tjänster som gör skillnad. 
                            Vi vill hjälpa våra kunder att skapa imponerande visuella upplevelser och funktionella hemsidor 
                            som sticker ut i mängden. Oavsett om det handlar om att fånga ögonblick genom vår kameralins eller 
                            bygga en hemsida från grunden, är vårt mål att leverera enastående resultat varje gång.
                        </p>
                    </div>   
                 </div> 
            </div>
            <span class='lastP'>Vi ser fram emot att samarbeta med dig och skapa något fantastiskt tillsammans!</span>
        </section>
    );
}

export default Skills;