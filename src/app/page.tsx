import React from 'react'
import HeroDashboard from '@/app/components/hero/hero'
import NavigationBar from '@/app/components/navigation/navbar'
import ConsultationCTA from './modules/contacts/ConsultationCTA'
import PackageList from './modules/package/PackageList'
import PortofolioCarousel from './modules/portofolio/PortofolioCarousel'
import ServicesList from './modules/service/ServicesList'
import Footer from './components/footer/footer'

export default function Home() {
  return (<React.Fragment>
    <main className="min-h-screen gradient-background">
      <NavigationBar />
      <HeroDashboard />
      <ServicesList />
      <PortofolioCarousel />
      <div className='px-20 py-20 gradient-1 min-h-screen'>
        <ConsultationCTA />
        <PackageList />
      </div>
    </main>
    <Footer />
  </React.Fragment>
  )
}
