import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Sticky from 'react-stickynode'
import { animateScroll as scroll } from 'react-scroll'
import { sizes } from '../helpers/sizes'

const StyledSticky = styled(Sticky)`
    z-index: 100;
    .inner {
        z-index: 100;
    }
`

const StyledButton = styled.button`
    transform: rotate(0deg);
    transition: transform 0.25s;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    @media (max-width: ${sizes.mb}) {
        width: 50px;
        height: 50px;
    }
    &:hover {
        transform: rotate(20deg);
    }
`

const StickyBear = () => {
    const scrollToTop = (e) => {
        console.log(e)
    }

    return (
        <StyledSticky innerActiveClass="inner">
            <StyledButton to="" onClick={() => scroll.scrollToTop()}>
                <Image src="/bear.webp" height={77} width={77} alt="bear" />
            </StyledButton>
        </StyledSticky>
    )
}

export default StickyBear
