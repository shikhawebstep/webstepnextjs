import React from 'react'
import Banner from '../Banner'
import ConverstionService from '../ConverstionService'
import Services from '../Services'
import OurExpertize from '../OurExpertize'
import Process from '../Process'
import ServicesPage from '../ServicesPage'
import Design from '../Design'
import Customer from '../Customer'
import Experience from '../Experience'
import MarketingTeam from '../MarketingTeam'
import FormSection from '../FormSection'
import AnimatedSection from '../AnimatedSection'

const Home = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen overflow-hidden font-roboto">
      <AnimatedSection delay={0} direction="down">
        <Banner />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="left">
        <ConverstionService />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="right">
        <Services />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="up">
        <OurExpertize />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="left">
        <Process />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="right">
        <ServicesPage />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="up">
        <Design />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="left">
        <Customer />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="right">
        <Experience />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="up">
        <MarketingTeam />
      </AnimatedSection>

      <AnimatedSection delay={0.2} direction="up">
        <FormSection />
      </AnimatedSection>
    </main>
  )
}
export default Home
