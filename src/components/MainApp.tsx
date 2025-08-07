'use client'

import { useState } from 'react'
import Header from './Header'
import Dashboard from './sections/Dashboard'
import Package from './sections/Package'
import NFT from './sections/NFT'
import Trade from './sections/Trade'
import Stake from './sections/Stake'
import Wallet from './sections/Wallet'

interface MainAppProps {
  userName: string
}

type Section = 'dashboard' | 'package' | 'nft' | 'trade' | 'stake' | 'wallet'

export default function MainApp({ userName }: MainAppProps) {
  const [activeSection, setActiveSection] = useState<Section>('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />
      case 'package':
        return <Package />
      case 'nft':
        return <NFT />
      case 'trade':
        return <Trade />
      case 'stake':
        return <Stake />
      case 'wallet':
        return <Wallet />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="bg-dark min-h-screen">
      <Header 
        userName={userName}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>
    </div>
  )
}