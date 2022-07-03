import pages from '../pages'

const routes = Object.keys(pages).map((e,i) => {
    const Component = pages[e]?.params ? pages[e].component : pages[e]
    const params = pages[e].params ?? ''
    return ({
        route: (i ? `/${e.toLowerCase().replaceAll(' ', '-')}/` : '/'),
        as: e,
        Component,
        position: i,
        params
    })
})
console.log(routes)
export default routes