export default function (to, from, savedPosition) {
    
    if (savedPosition) {
        return savedPosition
      }

    if (to.hash) {
        return window.scrollTo({
            top: document.querySelector(to.hash).offsetTop + window.innerHeight - 90,
            behavior: 'smooth'
        })
    }

    return window.scrollTo({ top: 0, behavior: 'smooth' })
}