import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { OPENSEA } from '../helpers/links'
const StyledMainContent = styled.main`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
    justify-content: center;
    gap: 75px;
    margin: 0 auto;
    margin-top: 100px;
`
const StyledImageWrapper = styled.div`
    border-radius: 50%;

    span {
        border-radius: 50%;
        box-shadow: 0px 0px 0px 7px white,
            -4px -4px 10px 10px rgba(0, 0, 0, 0.25);
    }
`
const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    p {
        font-size: 23px;
        max-width: 530px;
        line-height: 32.4px;
    }
`
const MainContent = () => {
    return (
        <StyledMainContent>
            <StyledImageWrapper>
                <Image alt="bears" src="/bears.gif" height={304} width={304} />
            </StyledImageWrapper>
            <StyledContentWrapper>
                <p>
                    Welcome to Bear Island! Each bear is individually drawn,
                    with a total of approximately 100 to be released. They are
                    only available on OpenSea, and start at .04ETH!
                </p>
                <button onClick={() => window.open(OPENSEA, '_blank')}>
                    <Image
                        width={206}
                        height={89}
                        alt="opensea"
                        src="/opensea.gif"
                    />
                </button>
            </StyledContentWrapper>
        </StyledMainContent>
    )
}

export default MainContent
