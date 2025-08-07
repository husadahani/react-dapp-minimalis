'use client'

import { Wallet, Coins, Image, ArrowLeftRight, ArrowUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="crypto-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Balance</p>
              <p className="text-2xl font-bold">$12,345.67</p>
              <p className="text-crypto-green text-sm">+5.2%</p>
            </div>
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center">
              <Wallet className="text-primary" />
            </div>
          </div>
        </div>
        
        <div className="crypto-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Staked Amount</p>
              <p className="text-2xl font-bold">$8,921.43</p>
              <p className="text-crypto-green text-sm">+12.8%</p>
            </div>
            <div className="w-12 h-12 bg-crypto-green bg-opacity-20 rounded-lg flex items-center justify-center">
              <Coins className="text-crypto-green" />
            </div>
          </div>
        </div>
        
        <div className="crypto-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">NFT Collection</p>
              <p className="text-2xl font-bold">23</p>
              <p className="text-crypto-green text-sm">+3 this week</p>
            </div>
            <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center">
              <Image className="text-secondary" />
            </div>
          </div>
        </div>
        
        <div className="crypto-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Trades</p>
              <p className="text-2xl font-bold">7</p>
              <p className="text-crypto-red text-sm">-2 today</p>
            </div>
            <div className="w-12 h-12 bg-crypto-red bg-opacity-20 rounded-lg flex items-center justify-center">
              <ArrowLeftRight className="text-crypto-red" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="crypto-card rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-crypto-green bg-opacity-20 rounded-full flex items-center justify-center">
                <ArrowUp className="text-crypto-green text-xs" />
              </div>
              <div>
                <p className="font-medium">Received ETH</p>
                <p className="text-sm text-gray-400">2 hours ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-crypto-green">+2.5 ETH</p>
              <p className="text-sm text-gray-400">$4,250.00</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                <Coins className="text-primary text-xs" />
              </div>
              <div>
                <p className="font-medium">Staking Reward</p>
                <p className="text-sm text-gray-400">1 day ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-crypto-green">+0.125 ETH</p>
              <p className="text-sm text-gray-400">$212.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}