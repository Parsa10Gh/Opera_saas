import React, { useState } from 'react'

const ScrollBar = () => {
    window.onscroll = function() {scroller()};
    const [scrolledStyle,setScrolledStyle] = useState({})
    const scroller = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrolledStyle({width: `${scrolled}%`});
    }
  return (
    <div id='scrollContainer' dir='rtl' className='bg-slate-600 z-50 w-full h-2 fixed bottom-0 left-0 right-0 mx-auto rounded-xl'>
    <div className='bg-gradient-to-l via-purple-600 from-yellow-400 to-red-800 h-full w-0 rounded-2xl' style={scrolledStyle}></div>
    </div>
  )
}

export default ScrollBar