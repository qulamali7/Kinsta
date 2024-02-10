import React from 'react'
import Stack from '../../components/Stack'
import Built from '../../components/Built'
import Process from '../../components/Process'
import Trial from '../../components/Trial'
import Everything from '../../components/Everything'
import Solid from '../../components/Solid'
import Support from '../../components/Support'
import Pay from '../../components/Pay'
import Try from '../../components/Try'
import Video from '../../components/Video'
import HeroPhoto from '../../components/HeroPhoto'
import Hero from '../../components/Hero'
import Faq from '../../components/Faq'
import Slider from '../../components/Slider'
const Home = () => {
    return (
        <>
            <Hero />
            <HeroPhoto />
            <Video />
            <Stack />
            <Built />
            <Process />
            <Trial />
            <Everything />
            <Solid />
            <Support />
            <Slider/>
            <Pay />
            <Try />
            <Faq/>
        </>
    )
}
export default Home