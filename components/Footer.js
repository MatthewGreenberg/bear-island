import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { sizes } from '../helpers/sizes'
const red = '#FF2A00'
const yellow = '#FFE600'
const blue = '#00C3FF'

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0;
    margin-top: 200px;
    padding: 0;
    @media (max-width: ${sizes.mb}) {
        padding: 10px;
    }
`
const StyledTitle = styled.h1`
    font-size: 65px;
    font-family: Adelia, sans-serif;
    color: ${red};
    text-shadow: -10px -10px 0 ${yellow}, -4px -25px 0 ${blue};
    align-self: center;
    @media (max-width: ${sizes.mb}) {
        font-size: 30px;
    }
`

const SocialContainer = styled.div`
    display: flex;
    gap: 10px;
`

const StyledButton = styled.button`
    transform: rotate(0deg);
    transition: transform 0.25s;
    @media (max-width: ${sizes.mb}) {
        width: 50px;
        height: 50px;
    }
    &:hover {
        transform: rotate(20deg);
    }
`

const StyledTitleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    span {
        transform: translateY(20px) scaleX(0.65) scaleY(0.7);
        position: absolute;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledTitleContainer>
                <StyledTitle>Bear Island</StyledTitle>
                <Image
                    layout="fill"
                    alt="bear-anim"
                    src={'/bear-jumping.gif'}
                />
            </StyledTitleContainer>
            <SocialContainer>
                <StyledButton>
                    <Image
                        width={52}
                        height={52}
                        src="/Discord.webp"
                        alt="discord"
                    />
                </StyledButton>

                <StyledButton>
                    <Image
                        width={52}
                        height={52}
                        src="/Twitter.webp"
                        alt="twitter"
                    />
                </StyledButton>
            </SocialContainer>
        </StyledFooter>
    )
}

export default Footer
