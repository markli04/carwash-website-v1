import React from 'react'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP 
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Услуги сервиса</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={require('../../images/png-1.png')}/>
                <ServicesH2>Мойка высокого давления</ServicesH2>
                <ServicesP>Без труда очистим твоё авто за считаные минуты</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={require('../../images/png-2.png')}/>
                <ServicesH2>Чистка салона</ServicesH2>
                <ServicesP>В салоне будет уютней чем дома</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={require('../../images/png-3.png')}/>
                <ServicesH2>Комплексная чистка</ServicesH2>
                <ServicesP>Каждая деталь скрипит от чистоты</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services