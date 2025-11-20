// Register the ScrollTrigger plugin for use
gsap.registerPlugin(ScrollTrigger);

// --- 1. Hero Section Entrance Animation ---
// Animate the title and subtitle on page load
gsap.timeline()
    .from(".hero-title", {
        duration: 1.5, 
        y: 100, 
        opacity: 0, 
        ease: "power3.out"
    })
    .from(".hero-subtitle", {
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: "power2.out"
    }, "-=0.8"); // Start 0.8 seconds before the previous animation ends


// --- 2. Content Section Scroll Animations (Parallax/Stagger) ---
document.querySelectorAll('.content-section').forEach((section, index) => {
    const image = section.querySelector('.content-image');
    const text = section.querySelector('.content-text');

    // Create a GSAP timeline for each section
    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start the animation when the top of the section hits 80% of the viewport
            end: "bottom 20%",
            toggleActions: "play none none none", // Play on entry, do nothing else
            // markers: true, // Uncomment for debugging scroll positions
        }
    })
    // Animate the text content (fade and slide up)
    .from(text, {
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: "power2.out"
    })
    // Animate the image content (fade and scale up slightly)
    .from(image, {
        duration: 1.2, 
        scale: 0.9, 
        opacity: 0, 
        ease: "power3.out"
    }, "-=0.8"); // Start the image animation slightly before the text animation finishes
});

// --- Optional: Image Parallax Effect (More Advanced) ---
// Add a subtle parallax to the image as the user scrolls
document.querySelectorAll('.content-image').forEach(image => {
    gsap.to(image, {
        y: -100, // Move image 100px up
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top bottom", // Start when the top of the image hits the bottom of the viewport
            end: "bottom top", // End when the bottom of the image leaves the top of the viewport
            scrub: 0.5, // Smoothly link animation progress to scroll position
        }
    });
});