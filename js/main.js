

let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.5,
};

let callback = (entries, observer) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            console.log('find', entry);
            entry.target.classList.add('anim-active');
            observer.unobserve(entry.target);
        }
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
    });
};
  
let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.animation');
targets.forEach(target => {
    observer.observe(target);
})