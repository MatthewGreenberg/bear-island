/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Emoji from './Emoji'
import { Element } from 'react-scroll'
import { sizes } from '../helpers/sizes'

const RibbonSectionStyled = styled(Element)`
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
const RibbonDescription = styled.p`
    font-size: 20px;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border-radius: 10px;
    @media (max-width: ${sizes.tb}) {
        max-width: 550px;
    }
`

const ItemsWrapper = styled.div`
    max-width: 518px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Item = styled.div`
    font-size: 23px;
    line-height: 32.4px;
    display: flex;
    background: lightgray;
    padding: 0 20px;
    border-radius: 10px;

    img {
        margin-right: 5px;
        display: block;
        width: 60px;
        height: 100%;
        object-fit: cover;
        transform: translateY(10px);
    }
`

const RibbonSection = ({ title, items, description }) => {
    return (
        <RibbonSectionStyled name={title} className={title}>
            <RibbonWrapper>
                <Image
                    width={600}
                    height={250}
                    src="/ribbon.webp"
                    alt="ribbon"
                />
                <h1>{title}</h1>
            </RibbonWrapper>
            {description && (
                <RibbonDescription>{description}</RibbonDescription>
            )}
            <ItemsWrapper>
                {items.map((item, i) => {
                    return (
                        <Item key={i}>
                            <img src="/bear.webp" alt="bear" />
                            <p>{item}</p>
                        </Item>
                    )
                })}
            </ItemsWrapper>
        </RibbonSectionStyled>
    )
}

export default RibbonSection
