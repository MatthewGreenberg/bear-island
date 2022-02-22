import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { DISCORD, TWITTER } from '../helpers/links'
import { sizes } from '../helpers/sizes'

const red = '#FF2A00'
const yellow = '#FFE600'
const blue = '#00C3FF'

const StyledHeader = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    z-index: 100;
`

const StyledTitleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    transition: 0.25s;
    will-change: opacity;
    span {
        transform: translateY(20px) scaleX(0.65) scaleY(0.7);
        position: absolute;
    }
`
const StyledTitle = styled.h1`
    font-size: 95px;
    font-family: Adelia, sans-serif;
    color: ${red};
    text-shadow: -10px -10px 0 ${yellow}, -4px -25px 0 ${blue};
    align-self: center;
    @media (max-width: ${sizes.md}) {
        font-size: 70px;
    }
    @media (max-width: ${sizes.tb}) {
        font-size: 50px;
    }
    @media (max-width: ${sizes.mb}) {
        font-size: 40px;
    }
`

const SocialContainer = styled.div`
    display: flex;
    gap: 10px;
    transition: opacity 0.25s;
`

const StyledButton = styled.button`
    transform: rotate(0deg);
    transition: transform 0.25s;
    &:hover {
        transform: rotate(20deg);
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledButton style={{ opacity: 0, pointerEvents: 'none' }}>
                <Image src="/bear.webp" height={77} width={77} alt="bear" />
            </StyledButton>
            <StyledTitleContainer className="Header__title">
                <StyledTitle>Bear Island</StyledTitle>
                <Image
                    layout="fill"
                    alt="bear-anim"
                    src={'/bear-jumping.gif'}
                />
            </StyledTitleContainer>
            <SocialContainer className="Header__social-container">
                <StyledButton onClick={() => window.open(DISCORD, '_blank')}>
                    <Image
                        width={52}
                        height={52}
                        src="/Discord.webp"
                        alt="discord"
                    />
                </StyledButton>

                <StyledButton onClick={() => window.open(TWITTER, '_blank')}>
                    <Image
                        width={52}
                        height={52}
                        src="/Twitter.webp"
                        alt="twitter"
                    />
                </StyledButton>
            </SocialContainer>
        </StyledHeader>
    )
}

export default Header
