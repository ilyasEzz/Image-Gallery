const current = document.querySelector('#current');
const opacity = 0.5;

// querySelectorAll returns a node list wich is similar to an array 
const imgs = document.querySelectorAll('.imgs img');


// Set first image opacity
imgs[0].style.opacity = opacity;


imgs.forEach(img => 
    img.addEventListener("click", imgClick )
);


function imgClick(e) {
    // Reset opacity
    imgs.forEach(img => (img.style.opacity = 1 ));

    // Change current image
    current.src = e.target.src;

    // Add fade in classe
    current.classList.add('fade-in');

    // Remove fade-in classe after 0.5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change opacity
    e.target.style.opacity = opacity;
}