"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoAlt="DogMemCoin"
        navItems={[ { name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' } ]}
        buttonText="Get MEME"
        onButtonClick={() => alert('Get started')} 
      />
      <div id="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to DogMemCoin"
          description="Join our playful community and celebrate the magic of memes!"
          primaryButtonText="Get MEME"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" className="scroll-mt-24">
        <SocialsAbout
          title="Join the DogMemCoin Community"
          descriptions={["A fun and engaging meme coin.", "Connect with friends and family.", "Make your memes come to life!"]}
        />
      </div>
      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Discover the key metrics behind DogMemCoin's success."
          kpiItems={[{ value: '10B', description: 'Total Supply' }, { value: '1M', description: 'Holders' }, { value: '3%', description: 'Transaction Fee' }]}
        />
      </div>
      <div id="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={80}
          columns={[
            { title: 'Links', items: [ { label: 'About', onClick: () => alert('About Clicked') }, { label: 'Blog', onClick: () => alert('Blog Clicked') }, { label: 'Contact', onClick: () => alert('Contact Clicked') }] },
            { title: 'Support', items: [ { label: 'Help Center', onClick: () => alert('Help Clicked') }, { label: 'Privacy Policy', onClick: () => alert('Privacy clicked') } ] },
            { title: 'Community', items: [ { label: 'Twitter', onClick: () => alert('Twitter Clicked') }, { label: 'Discord', onClick: () => alert('Discord Clicked') } ] }
          ]}
          copyrightText="© 2023 DogMemCoin. All rights reserved."
          onPrivacyClick={() => alert('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
