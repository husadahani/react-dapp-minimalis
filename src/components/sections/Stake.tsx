'use client'

import { Coins, TrendingUp, Lock, Unlock } from 'lucide-react'

export default function Stake() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-8">Staking Platform</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staking Overview */}
        <div className="crypto-card rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Staking Overview</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-crypto-green bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Coins className="text-crypto-green" />
                </div>
                <div>
                  <p className="font-medium">Total Staked</p>
                  <p className="text-sm text-gray-400">ETH</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">12.5 ETH</p>
                <p className="text-sm text-crypto-green">$21,250.00</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">APY Rate</p>
                  <p className="text-sm text-gray-400">Annual Yield</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-crypto-green">8.5%</p>
                <p className="text-sm text-gray-400">+0.2% this week</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Lock className="text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Lock Period</p>
                  <p className="text-sm text-gray-400">Minimum Lock</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">30 Days</p>
                <p className="text-sm text-gray-400">Flexible</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Staking Actions */}
        <div className="crypto-card rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Stake Amount</label>
              <div className="relative">
                <input 
                  type="number" 
                  placeholder="0.0"
                  className="w-full bg-dark-light border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <div className="absolute right-3 top-3 text-gray-400">ETH</div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-crypto-green hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors">
                <Lock className="w-4 h-4 inline mr-2" />
                Stake
              </button>
              <button className="flex-1 bg-primary hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors">
                <Unlock className="w-4 h-4 inline mr-2" />
                Unstake
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="font-semibold mb-3">Recent Rewards</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Daily Reward</span>
                <span className="text-crypto-green">+0.025 ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Weekly Bonus</span>
                <span className="text-crypto-green">+0.125 ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Earned</span>
                <span className="text-crypto-green">+2.45 ETH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}