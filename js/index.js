const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// let ctaImg = document.getElementById('.cta-img').src;
// ctaImg = '/img/header-img.png';
// console.log(ctaImg);
//USE THE EXAMPLE!! DON'T BE FANCY...YET

let logo = document.getElementById("logo-img");
logo.setAttribute('src', './img/logo.png');
// console.log(logo);

const cta = document.getElementById('cta-img');
cta.setAttribute('src', './img/header-img.png');
// console.log(cta);

const middle = document.getElementById('middle-img');
middle.setAttribute('src', './img/mid-page-accent.jpg');

// const ctaText = document.getSelection('.text-content');
// ctaText.textContent = "Features";

// let ctaText = document.getElementsByClassName('text-content');
// // ctaText.textContent = "Features";
// // console.log(ctaText);
// ctaText[0].textContent = "Features", "Features content elementum magna eros,"; 
// ctaText[1].textContent = "About";
// ctaText[2].textContent = "Service";
// ctaText[3].textContent = "Product";
// ctaText[4].textContent = "Vision";
//this was not specific enough and wasn't letting me change the h4 and the p

//'text-content' worked about, but with class name -> helped figure out below, have to use tag name, make an array and then re-assign all the elements their new information

let navi = document.getElementsByTagName("a");
// console.log(navi);
navi[0].textContent = "Services";
navi[1].textContent = "Product";
navi[2].textContent = "Vision";
navi[3].textContent = "Features";
navi[4].textContent = "About";
navi[5].textContent = "Contact";

let h1 = document.getElementsByTagName('h1');
// console.log(h1);
h1[0].textContent = 'DOM IS AWESOME';

//make sure to use .textContent

let button = document.getElementsByTagName('button');
// console.log(button);
button[0].textContent = 'Get Started';

let h4 = document.getElementsByTagName('h4');
console.log(h4);
h4[0].textContent = 'Features';
h4[1].textContent = 'About';
h4[2].textContent = 'Services';
h4[3].textContent = 'Product';
h4[4].textContent = 'Vision';
h4[5].textContent = 'Contact';

let p = document.getElementsByTagName('p');
// console.log(p);
p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[1].textContent = 'About content content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
p[5].textContent = '123 Way 456 Street';
p[6].textContent = 'Somewhere, USA';
p[7].textContent = '1 (888) 888-888';
p[8].textContent = 'Copyright Great Idea! 2018';

//work on nav append and come back later
// let pFirst = document.createElement('p');
// pFirst = '123 Way 456 Street';
// sectionEl.appendChild(pFirst);
// console.log(p);

let address = document.querySelector('section.contact');
console.log(address);
let pLast = document.createElement('p');
pLast.textContent = 'sales@greatidea.io';
address.appendChild(pLast);

// let address = document.querySelector('section.contact p');
// console.log(address);

// let navColor = document.querySelectorAll('a');
// navColor.style.color = 'green';



