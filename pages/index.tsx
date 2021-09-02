
import Head from 'next/head'
import Hero from '../components/landing/Hero'
import PreFooter from '../components/landing/PreFooter'
import SemiFlex from '../components/landing/SemiFlex'
import Sidekick from '../components/landing/Sidekick'
import GridWrapper from '../layouts/GridWrapper'


export default function Home() {
  return (
    <>

      <Head>
        <title>Job Unicorn | Home</title>
        <meta name="description" content="Earn in solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Hero />

      <Sidekick />

      <GridWrapper columns={3}>
        <SemiFlex inverted={false} />
        <SemiFlex inverted={true} />
      </GridWrapper>

      <PreFooter />

    </>
  )
}
