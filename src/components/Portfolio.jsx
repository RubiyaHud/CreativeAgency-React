import React from 'react'
import Heading from './Heading'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import portfolioImg1 from '../assets/portfolioImg1.png'
import portfolioImg2 from '../assets/portfolioImg2.png'
import portfolioImg3 from '../assets/portfolioImg3.png'
import portfolioImg4 from '../assets/portfolioImg4.png'
import portfolioImg5 from '../assets/portfolioImg5.png'
import portfolioImg6 from '../assets/portfolioImg6.png'
import portfolioImg7 from '../assets/portfolioImg7.png'
import portfolioImg8 from '../assets/portfolioImg8.png'
import HeadingWithPara from './HeadingWithPara'

const Portfolio = () => {
    return (
        <>
            <div className="mb-[105px]">
                <Container>
                    <HeadingWithPara className={""} classH={"text-center"} classP={"text-center m-auto"} hText={"Our Work Portfolio"} pText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                    <Flex className={"mt-[50px] flex-wrap justify-between"}>
                        <Image className={""} imgSrc={portfolioImg1} imgAlt={"portfolio Image1"} />
                        <Image className={""} imgSrc={portfolioImg2} imgAlt={"portfolio Image2"} />
                        <Image className={""} imgSrc={portfolioImg3} imgAlt={"portfolio Image3"} />
                        <Image className={""} imgSrc={portfolioImg4} imgAlt={"portfolio Image4"} />
                        <Image className={"mt-[30px]"} imgSrc={portfolioImg5} imgAlt={"portfolio Image5"} />
                        <Image className={"mt-[30px]"} imgSrc={portfolioImg6} imgAlt={"portfolio Image6"} />
                        <Image className={"mt-[30px]"} imgSrc={portfolioImg7} imgAlt={"portfolio Image7"} />
                        <Image className={"mt-[30px]"} imgSrc={portfolioImg8} imgAlt={"portfolio Image8"} />


                    </Flex>

                </Container>
            </div>

        </>
    )
}

export default Portfolio