import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import parse from 'html-react-parser'
import { Element } from 'react-scroll'
import { sizes } from '../helpers/sizes'

const StyledCreatorSection = styled(Element)`
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
    }
`

export const CreatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media (max-width: ${sizes.tb}) {
        flex-direction: column;
        gap: 20px;
    }
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
const CREATOR_COPY =
    "Hi, I'm <em>Collette</em>, the creator and founder of Bear Island! Currently Bear Island is a one-person managed project. I design, draw, market, and run my own social media. But there are a few individuals I would like to thank for making many parts of it possible! <br /> <br /> Minute, Emerald, Gremlin, Matt, Cache, Valentart"
const CreatorSection = () => {
    return (
        <StyledCreatorSection name="CREATOR">
            <RibbonWrapper>
                <Image
                    width={600}
                    height={250}
                    src="/ribbon.webp"
                    alt="ribbon"
                />
                <h1>THE CREATOR</h1>
            </RibbonWrapper>
            <CreatorWrapper>
                <Image
                    src="/creator.webp"
                    alt="creator"
                    height={300}
                    width={300}
                />
                <p>{parse(CREATOR_COPY)}</p>
            </CreatorWrapper>
        </StyledCreatorSection>
    )
}

export default CreatorSection
