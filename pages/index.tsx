import SEO from '../components/general/SEO'
import Hero from '../components/landing/Hero'
import PreFooter from '../components/landing/PreFooter'
import { withNearWallet } from '../components/near/withNearWallet'
import GridWrapper from '../layouts/GridWrapper'
import Features from '../components/landing/Features'


function Home() {
  return (
    <>

      <SEO title={"The Best Job Search Tool on the Web."}/>

      

      {/* <Sidekick /> */}

      <GridWrapper columns={3}>
        <Hero />
        <Features />
        <PreFooter />
      </GridWrapper>

     

    </>
  )
}

const Page = withNearWallet(Home, "LANDING_PAGE")

export default Page