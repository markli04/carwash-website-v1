import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
import Video from '../../video/video.mp4'


const HeroSection = () => {

  const [hover, setHover] = useState(false)
  
  const onHover = () => {
      setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Место для тебя и твоей машины</HeroH1>
            <HeroP>
            Такого сервиса ты ещё не видел. Приезжай и убедись сам!
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true} 
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    Записаться! {hover ? <ArrowForward /> : <ArrowRight />} 
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    )
}

export default HeroSection