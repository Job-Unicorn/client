
import Head from 'next/head'
import Hero from '../components/landing/Hero'
import PreFooter from '../components/landing/PreFooter'
import SemiFlex from '../components/landing/SemiFlex'
import Sidekick from '../components/landing/Sidekick'
import { withNearWallet } from '../components/near/withNearWallet'
import GridWrapper from '../layouts/GridWrapper'


function Home() {
  return (
    <>

      <Head>
        <title>Job Unicorn | Home</title>
        <meta name="description" content="Earn in NEAR" />
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

const Page = withNearWallet(Home, "DOES_NOT_NEED_AUTHENTICATION")

export default Page