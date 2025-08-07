'use client'

import { ArrowUpDown, TrendingUp, TrendingDown, DollarSign } from 'lucide-react'

export default function Trade() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-8">Trading Platform</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trading Chart */}
        <div className="lg:col-span-2 crypto-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">BTC/USDT</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-crypto-green bg-opacity-20 text-crypto-green rounded text-sm">
                1H
              </button>
              <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                4H
              </button>
              <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                1D
              </button>
            </div>
          </div>
          
          <div className="h-64 bg-dark-light rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="text-4xl text-crypto-green mx-auto mb-2" />
              <p className="text-gray-400">Chart Coming Soon</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Current Price</p>
              <p className="text-2xl font-bold text-crypto-green">$45,234.56</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">24h Change</p>
              <p className="text-lg font-semibold text-crypto-green">+2.34%</p>
            </div>
          </div>
        </div>
        
        {/* Trading Form */}
        <div className="crypto-card rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Trade</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Amount</label>
              <div className="relative">
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-dark-light border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <div className="absolute right-3 top-3 text-gray-400">USDT</div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-crypto-green hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors">
                <TrendingUp className="w-4 h-4 inline mr-2" />
                Buy
              </button>
              <button className="flex-1 bg-crypto-red hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors">
                <TrendingDown className="w-4 h-4 inline mr-2" />
                Sell
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="font-semibold mb-3">Recent Trades</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-crypto-green">Buy</span>
                <span>0.5 BTC</span>
                <span className="text-gray-400">$22,617.28</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-crypto-red">Sell</span>
                <span>0.2 BTC</span>
                <span className="text-gray-400">$9,046.91</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-crypto-green">Buy</span>
                <span>1.0 BTC</span>
                <span className="text-gray-400">$45,234.56</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}