const navigation = document.querySelector(".navigation");
let prevScrollLocation = window.pageYOffset;

// remove class visible and add calss hidden to navigation
const hideNavigation = (navigation) => {
    navigation.classList.remove("visible");
    navigation.classList.add("hidden");
};
// remove class hidden and add class visible to navigation
const showNavigation = (navigation) => {
    navigation.classList.remove("hidden");
    navigation.classList.add("visible");
};

// capture window scroll event to see if navigation needs be hidden or not
window.onscroll = function () {
    // current pos in page
    let currentPos = window.pageYOffset;
    // for screens smaller than 769px toggle navigation bar depending if they scroll down or not otherwise always show the navigation bar
    if (window.innerWidth < 769) {
        prevScrollLocation > currentPos
            ? showNavigation(navigation)
            : hideNavigation(navigation);
    } else {
        showNavigation(navigation);
    }
    // reset the prev lcoation
    prevScrollLocation = currentPos;
};
