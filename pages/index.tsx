
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
        <link rel="icon" href="/favicon.ico" />

       
        <title>Job Unicorn — The Best Job Search Tool on the Web.</title>
        <meta name="title" content="Job Unicorn — The Best Job Search Tool on the Web."/>
        <meta name="description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position."/>


        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://jobunicorn.tech/"/>
        <meta property="og:title" content="Job Unicorn — The Best Job Search Tool on the Web."/>
        <meta property="og:description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position."/>
        <meta property="og:image" content="https://jobunicorn.tech/banner.png"/>


        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://jobunicorn.tech/"/>
        <meta property="twitter:title" content="Job Unicorn — The Best Job Search Tool on the Web."/>
        <meta property="twitter:description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position."/>
        <meta property="twitter:image" content="https://jobunicorn.tech/banner.png"></meta>
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