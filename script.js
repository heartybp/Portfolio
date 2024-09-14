document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the specified classes
    const slideElements = document.querySelectorAll('.two-blocks, .two-blocks-2, .skills-icons');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);  // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.05 });  // Trigger when 5% of the element is visible
    
    slideElements.forEach(el => {
        observer.observe(el);
    });
});


var i = 0;
var currentTextIndex = 0;
var isDeleting = false;
var speed = 30; // Typing/erasing speed
var txtArray = [
  "Hello World! I'm Hearty. I am a Computer Science major at UC Irvine with a focus on Information Systems.",
  "In my free time, I like reading books and watching TV shows on Netflix. Currently, I'm learning how to play Pickleball!"
]; 

function typeWriter() {
  var txt = txtArray[currentTextIndex];
  
  if (!isDeleting && i < txt.length) {
    document.getElementById("about-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && i > 0) {
    document.getElementById("about-text").innerHTML = txt.substring(0, i - 1);
    i--;
    setTimeout(typeWriter, speed);
  } else if (!isDeleting && i === txt.length) {
    // Pause before starting to erase
    isDeleting = true;
    setTimeout(typeWriter, 1000); // Wait 1 second before deleting
  } else if (isDeleting && i === 0) {
    // Switch to the next text when erasing is complete
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % txtArray.length; // Loop through the texts
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  typeWriter();
}


