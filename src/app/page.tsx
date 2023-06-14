import React from 'react'
import HeroDashboard from '@/components/hero/hero'
import ConsultationCTA from './modules/contacts/ConsultationCTA'
import PackageList from './modules/package/PackageList'
import PortofolioCarousel from './modules/portofolio/PortofolioCarousel'
import ServicesList from './modules/service/ServicesList'

export default function Home() {

  return (
    <React.Fragment>
      <main className="min-h-screen gradient-background overflow-hidden">
        <HeroDashboard />
        <ServicesList />
        <PortofolioCarousel />
        <div className='p-5 lg:px-20 lg:py-20 gradient-1 min-h-screen'>
          <ConsultationCTA />
          <PackageList />
        </div>
      </main>
    </React.Fragment>
  )
}
