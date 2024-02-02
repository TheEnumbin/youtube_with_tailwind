const stickyMenu = () => {
    const header = document.getElementById('header')

    const scroll = document.documentElement.scrollTop
    if (scroll > 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky')
    }
}

document.addEventListener('scroll', stickyMenu)