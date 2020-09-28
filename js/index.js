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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const mainNav = document.querySelector('header nav')

//constructing the nav bar

const navBarLinks = document.querySelectorAll('a')
console.log(navBarLinks)

navBarLinks[0].textContent = 'Services'
navBarLinks[0].classList.add('navItemOne')

navBarLinks[1].textContent = 'Product'
navBarLinks[1].classList.add('navItemTwo')

navBarLinks[2].textContent = 'Vision'
navBarLinks[2].classList.add('navItemThree')

navBarLinks[3].textContent = 'Features'
navBarLinks[3].classList.add('navItemFour')

navBarLinks[4].textContent = 'About'
navBarLinks[4].classList.add('navItemFive')

navBarLinks[5].textContent = 'Contact'
navBarLinks[5].classList.add('navItemSix')

//Nav bar styles
navBarLinks.forEach(link =>{
  link.style.color = 'green'
  link.style.backgroundColor = 'magenta'
})

//Adding Links to NavBar
const navItemSeven = document.createElement('a')
navItemSeven.textContent ='Facts and Info'
navItemSeven.classList.add('navItemSeven')
navItemSeven.href='#'
navItemSeven.style.color = 'green'
navItemSeven.backgroundColor = 'magenta'

const navItemEight = document.createElement('a')
navItemEight.textContent = 'Company Partners'
navItemEight.classList.add('navItemEight')
navItemEight.href = '#'
navItemEight.style.color = 'green'
navItemEight.backgroundColor = 'magenta'

//Creating the main text body
const headerText = document.querySelector('h1')
const headerButton = document.querySelector('button')
headerButton.textContent = 'Get Started Now!'
const headerPicture = document.querySelectorAll('#cta-img')
const mainText = document.querySelectorAll('.text-content')
headerText.textContent = siteContent['cta']['h1']
headerPicture.setAttribute('src', siteContent["cta"]["img-src"])

