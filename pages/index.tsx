import SEO from '../components/general/SEO'
import Hero from '../components/landing/Hero'
import PreFooter from '../components/landing/PreFooter'
import SemiFlex from '../components/landing/SemiFlex'
import Sidekick from '../components/landing/Sidekick'
import { withNearWallet } from '../components/near/withNearWallet'
import GridWrapper from '../layouts/GridWrapper'


function Home() {
  return (
    <>

      <SEO title={"The Best Job Search Tool on the Web."}/>

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

const Page = withNearWallet(Home, "LANDING_PAGE")

export default Page