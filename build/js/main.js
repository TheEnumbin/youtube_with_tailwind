const stickyMenu = () => {
    const header = document.getElementById('header')

    const scroll = document.documentElement.scrollTop
    if (scroll > 20) {
        header.classList.add('sticky');
        header.classList.add('animate-sticky-header');
    } else {
        header.classList.remove('sticky')
        header.classList.remove('animate-sticky-header')
    }
}

document.addEventListener('scroll', stickyMenu)