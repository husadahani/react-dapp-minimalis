'use client'

import { Check } from 'lucide-react'

export default function Package() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-8">Investment Packages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="crypto-card rounded-xl p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Starter Package</h3>
            <p className="text-3xl font-bold text-primary">$500</p>
            <p className="text-gray-400">Minimum Investment</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              5% Monthly Return
            </li>
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              Basic Support
            </li>
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              Flexible Duration
            </li>
          </ul>
          <button className="w-full bg-primary hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors">
            Invest Now
          </button>
        </div>
        
        <div className="crypto-card rounded-xl p-6 border-primary border-2">
          <div className="text-center mb-6">
            <div className="bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
              POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">Professional Package</h3>
            <p className="text-3xl font-bold text-primary">$2,500</p>
            <p className="text-gray-400">Recommended</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              8% Monthly Return
            </li>
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              Priority Support
            </li>
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              Advanced Analytics
            </li>
          </ul>
          <button className="w-full bg-primary hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors">
            Invest Now
          </button>
        </div>
        
        <div className="crypto-card rounded-xl p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Premium Package</h3>
            <p className="text-3xl font-bold text-primary">$10,000</p>
            <p className="text-gray-400">High Yield</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              12% Monthly Return
            </li>
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              VIP Support
            </li>
            <li className="flex items-center">
              <Check className="text-crypto-green mr-2 w-4 h-4" />
              Exclusive Features
            </li>
          </ul>
          <button className="w-full bg-primary hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  )
}