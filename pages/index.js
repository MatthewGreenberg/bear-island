import { useRef } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import ButtonSection from '../components/ButtonSection'
import RibbonSection from '../components/RibbonSection'
import CreatorSection from '../components/CreatorSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import StickyBear from '../components/StickyBear'
import Image from 'next/image'
import { sizes } from '../helpers/sizes'

const PaddingWrapper = styled.div`
    padding: 40px;
    @media (max-width: ${sizes.mb}) {
        padding: 30px 10px;
    }
`

const StyledBG = styled.div`
    background: url('/site-bg.webp') center / cover;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`

const SiteWrapper = styled.div`
    position: relative;
`

const Divider = styled.div`
    height: 3px;
    width: 100%;
    background: white;
    position: relative;
    z-index: 10;
    margin: 50px 0;
`

const GenerativeImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    #generative {
        position: relative;
        width: 30%;
        @media (max-width: ${sizes.tb}) {
            width: 60%;
        }
    }
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
        white-space: nowrap;
        @media (max-width: ${sizes.mb}) {
            font-size: 30px;
        }
    }
`

export default function Home() {
    return (
        <div className="app">
            <Head>
                <title>Bear Island</title>
                <meta property="og:title" content="Bear Island" />
                <meta property="og:image" content="/twitter-bear.png" />
                <meta name="description" content="Welcome to Bear Island!" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:video" content={'/bears.mp4'} />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/fonts/Adelia.otf"
                    as="font"
                    crossOrigin=""
                />
                {/* Twitter card */}
                <meta
                    name="twitter:image"
                    content="https://i.ibb.co/cDgWcPf/twitter-bear.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@BearIslandNFT" />
                <meta name="twitter:creator" content="@BearIslandNFT" />
                <meta name="twitter:title" content="Bear Island" />
                <meta
                    name="twitter:description"
                    content="Welcome to Bear Island!"
                />
            </Head>
            <SiteWrapper>
                <StyledBG />
                <PaddingWrapper>
                    <StickyBear />
                    <Header />
                    <MainContent />
                </PaddingWrapper>
                <Divider />
                <PaddingWrapper>
                    <ButtonSection />
                </PaddingWrapper>
                <Divider />
                <GenerativeImageWrapper>
                    <RibbonWrapper>
                        <Image
                            width={600}
                            height={250}
                            src="/ribbon.webp"
                            alt="ribbon"
                        />
                        <h1>Coming Soon</h1>
                    </RibbonWrapper>
                    <img
                        id="generative"
                        alt="generative project"
                        src="/generative.gif"
                    />
                </GenerativeImageWrapper>
                <Divider />

                <RibbonSection
                    title="PERKS"
                    items={[
                        'Ability to be involved with future projects via input, community votes, suggestions, etc.',
                        'First in line for future project minting with either free mints, heavy discounts, or guaranteed whitelist spots.',
                        'Access to the Bear Owner locked channel in Discord',
                        '+ more!',
                    ]}
                />
                <Divider />
                <RibbonSection
                    description="Due to the small nature of this project, the roadmap is always constantly in progress, and at least 50% of all profits are reinvested into future ideas."
                    title="ROADMAP"
                    items={[
                        'Website launch.',
                        'WanderBears.',
                        'Coloring Book pages as free mints to Bearified Holders,',
                        'Coloring Book (physical merchandise),',
                        'Trading Cards as free mints to Bearified Holders,',
                        'Trading Cards (TCG as physical merchandise),',
                        'Generative Project,',
                    ]}
                />
                <Divider />
                <CreatorSection />
                <Divider />
                <FAQSection
                    faqs={[
                        {
                            question: 'When was bear island founded?',
                            answer: 'The community started in 2020. The NFT project began in 2021!',
                        },
                        {
                            question: "What's next?",
                            answer: 'Checking out the road map or following my Twitter or joining my Discord is the best way to learn about new information',
                        },
                        {
                            question:
                                'How long does it take you to draw a bear?',
                            answer: 'Anywhere from 2-6 hours!',
                        },
                    ]}
                />
                <PaddingWrapper>
                    <Footer />
                </PaddingWrapper>
            </SiteWrapper>
        </div>
    )
}
