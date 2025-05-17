

// ===============  slider part start ===============

const gallaryContent =document.querySelector('.gallary-content');
const gallaryControlConteiner =document.querySelector('.gallary-control');
const gallaryControl = ['previous','next'];
const gallaryItem =document.querySelectorAll('.gallary-item');



class carousel {
    constructor(content, item, control){
        this.carouselContent = content;
        this.carouselControl = control;
        this.carouselArray = [...item];
    }


    updateGallary(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallary-item-1');
            el.classList.remove('gallary-item-2');
            el.classList.remove('gallary-item-3');
            el.classList.remove('gallary-item-4');
            el.classList.remove('gallary-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {

            el.classList.add(`gallary-item-${i+1}`);
        });

    }
    setCurrentState(direction){
        if(direction.className == 'gallary-control-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallary();
    }


    setControl() {
        this.carouselControl.forEach(controls =>{
            gallaryControlConteiner.appendChild(document.createElement('button')).className = `gallary-control-${controls}`;
            document.querySelector(`.gallary-control-${controls}`).innerText = controls;


        });
    }
    useControl(){
        const triggers =[...gallaryControlConteiner.childNodes];
        triggers.forEach(controls => {
            controls.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(controls);
            });
        });
    }

}
const exampleCarousel = new  carousel(gallaryContent, gallaryItem, gallaryControl);

exampleCarousel.setControl();
exampleCarousel.useControl();




// ===============  slider part end ===============

// ===============  animation part start  ==============//


ScrollReveal({ 
    distance:'120px',
    duration: 3000,
    delay: 200,
});

ScrollReveal().reveal('.bnr-text,.left-part img,.icons,.left-side', { origin: 'left' });
ScrollReveal().reveal('.top ,.bottom', { origin: 'buttom' });
ScrollReveal().reveal('.ab-title, .sk-title, .pro-title,.foot-title', { origin: 'top' });
ScrollReveal().reveal('.bnr-photo,.right-part,.persent,.right-side,about-wrapper', { origin: 'right' });





// ===============  animation part end   ================//

// ===============  nav toggle part start   =============



let section =document.querySelectorAll('section')
let navLink =document.querySelectorAll('section nav a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLink.forEach(links =>{

                links.classList.remove('active');
                document.querySelector('.list a[href*=' + id + ']').classList.add('active');

            });

        };

    });

};


// ===============  nav toggle part start   =============

// =============   type.js part start   ==================


const typed = new Typed('.multiple-text', {
    strings: [' Frontend Developer',' Web designer'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
});


// =============   type.js part start   ==================








