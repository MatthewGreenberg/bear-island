import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import parse from 'html-react-parser'
import { Element } from 'react-scroll'
import { sizes } from '../helpers/sizes'

const StyledFAQSection = styled(Element)`
    display: flex;
    flex-direction: column;
    gap: 0px;
    position: relative;
`

const RibbonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    h1 {
        position: absolute;
        left: 50%;
        top: 32%;
        transform: translate(-50%, 0%);
        font-family: Adelia, sans-serif;
        font-size: 40px;
        @media (max-width: ${sizes.mb}) {
            font-size: 30px;
        }
    }
`

export const CreatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    p {
        max-width: 500px;
        font-size: 20px;
        line-height: 32.4px;
        background: lightgray;
        padding: 30px;
        border-radius: 10px;

        em {
            color: hotpink;
            display: inline;
        }
    }
`

const FAQSWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
`

const FAQWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: lightgray;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    @media (max-width: ${sizes.mb}) {
        width: 80%;
    }
    h3 {
        font-family: 'Chelsea Market', cursive;
        font-size: 30px;
        @media (max-width: ${sizes.mb}) {
            font-size: 26px;
            line-height: 25px;
        }
    }
    p {
        font-size: 20px;
        line-height: 32.4px;
        @media (max-width: ${sizes.mb}) {
            font-size: 18px;
            line-height: 25px;
        }
    }
`

const FAQSection = ({ faqs }) => {
    return (
        <StyledFAQSection name="FAQ">
            <RibbonWrapper>
                <Image
                    width={600}
                    height={250}
                    src="/ribbon.webp"
                    alt="ribbon"
                />
                <h1>FAQ</h1>
            </RibbonWrapper>
            <FAQSWrapper>
                {faqs.map((faq, i) => {
                    return (
                        <FAQWrapper key={i}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </FAQWrapper>
                    )
                })}
            </FAQSWrapper>
        </StyledFAQSection>
    )
}

export default FAQSection
