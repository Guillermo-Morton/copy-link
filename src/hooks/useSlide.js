import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import routes from '../router/routes'

const useSlide = (position, from)=> {
    console.log(from)
    from = from ?? 'next'
    const [slideManager, setSlideManager] = useState({sliding: false, direction:from})
    const {sliding, direction} = slideManager
    const navigate = useNavigate()
    const animation= {
        back: `animate__animated ${sliding ? 'animate__fadeOutDown' : 'animate__fadeInDown'}`,
        next: `animate__animated ${sliding ? 'animate__fadeOutUp' : 'animate__fadeInUp'}`
    }
    const goNext = (params='') => {
        setSlideManager({sliding:true, direction:'next'})
        setTimeout(()=> {
            const route = routes[position+1].route
            navigate(route + params, {state:'next'})
        },500)
    }
    const goBack= (params) => {
        setSlideManager({sliding:true, direction:'back'})
        setTimeout(()=> {
            navigate(routes[position-1].route, {state:'back'})
        },500)
    }
    return {goBack, goNext, sliding, animation: animation[direction]}
}
export default useSlide