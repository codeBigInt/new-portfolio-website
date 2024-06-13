import { useEffect, useRef, useState } from "react";
import React from "react";

export const storeConetext = React.createContext({});

const StoreProvider = (props) => {
    const [mediaWidth, setMediaWidth] = useState(window.innerWidth)
    const [scrollHeight, setScrollHeight] = useState(window.scrollY)
    
    function updateMediaWidth(){
        setMediaWidth(window.innerWidth)
    }

    const trackScroll = () => {
        setScrollHeight(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', trackScroll)

        return () => window.removeEventListener('scroll', trackScroll)
    }, [])


    useEffect(() => {
        window.addEventListener('resize', updateMediaWidth)
        
        return () => window.removeEventListener('reisze', updateMediaWidth)
    }, [mediaWidth])

    const valueProvider = {
        mediaWidth, setMediaWidth, scrollHeight, setScrollHeight
    }
    return(
        <storeConetext.Provider value = {valueProvider}>
            {props.children}
        </storeConetext.Provider>
    )
}

export default StoreProvider