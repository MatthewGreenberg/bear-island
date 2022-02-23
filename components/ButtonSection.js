import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { sizes } from '../helpers/sizes'
const StyledButtonSection = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 100px;
    @media (max-width: ${sizes.mb}) {
        gap: 20px;
    }
`
const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (max-width: ${sizes.mb}) {
        gap: 20px;
    }
`
const StyledButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    h3 {
        font-family: Adelia, sans-serif;
        position: absolute;
        z-index: 10;
        color: #292929;
        font-size: 23px;
        text-align: center;
        max-width: 200px;
        @media (max-width: ${sizes.tb}) {
            font-size: 18px;
        }
        @media (max-width: 533px) {
            font-size: 14px;
            max-width: 150px;
        }
        @media (max-width: 320px) {
            font-size: 12px;
            max-width: 150px;
        }
    }
`
const ButtonSection = () => {
    return (
        <StyledButtonSection>
            <RowContainer>
                <StyledButton smooth={true} to="CREATOR">
                    <h3>MEET THE CREATOR</h3>
                    <Image
                        width={373}
                        height={155}
                        alt="button"
                        src="/yellow-button.gif"
                    />
                </StyledButton>
                <StyledButton smooth={true} to="PERKS">
                    <h3>PERKS OF HOLDING A BEAR</h3>
                    <Image
                        width={373}
                        height={155}
                        alt="button"
                        src="/red-button.gif"
                    />
                </StyledButton>
            </RowContainer>
            <RowContainer>
                <StyledButton smooth={true} to="FAQ">
                    <h3>F.A.Q.</h3>
                    <Image
                        width={373}
                        height={155}
                        alt="button"
                        src="/brown-button.gif"
                    />
                </StyledButton>
                <StyledButton smooth={true} to="ROADMAP">
                    <h3>Roadmap</h3>
                    <Image
                        width={373}
                        height={155}
                        alt="button"
                        src="/blue-button.gif"
                    />
                </StyledButton>
            </RowContainer>
        </StyledButtonSection>
    )
}

export default ButtonSection
