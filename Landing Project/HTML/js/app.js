/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let navSections = document.getElementsByTagName("section");
let ul = document.getElementById("navbar__list");
let links = document.getElementsByTagName("a");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function testing() {
	console.log(navSections);
	console.log(links);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(list) {

	for (let i = 0; i < list.length; i++) {
		let section = list[i];
		let sectionHeader = section.querySelector('h2');
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.href = "#section" + (i+1);
		a.textContent = sectionHeader.innerHTML;
		a.setAttribute("class", ".menu__link");
		li.appendChild(a);
		ul.appendChild(li);
	}
}

// Add class 'active' to section when near top of viewport

function checkViewport(element) {
  	let bounding = element.getBoundingClientRect();
    return (
			bounding.top >= 0 &&
			bounding.left >= 0 && 
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && 
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

function setActive(navSections) {

 	for (i = 0; i < navSections.length; i++) {
	    let sectionNew = document.getElementById("section" + (i+1));
	    let linksNew = document.getElementsByTagName("a");
	    let linksNewNew = linksNew[i];

	    window.addEventListener("scroll", function(event) {
	        if (checkViewport(sectionNew)) {
	          sectionNew.classList.add("your-active-class");
	          linksNewNew.classList.add("active");
	        }

	        else {
	          sectionNew.classList.remove("your-active-class");
	         linksNewNew.classList.remove("active");
	        } 
	    } , false
	    );
  	}
}

// Scroll to anchor ID using scrollTO event

function scrollTo(links, event) {
	for (let i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function(event) {
			event.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        	});
		});	
	}
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("load", buildNav(navSections));

// Scroll to section on link click
scrollTo(links,event);


// Set sections as active
setActive(navSections);

//Testing
document.addEventListener("load", testing());

