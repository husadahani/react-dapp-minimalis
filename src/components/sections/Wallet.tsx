'use client'

import { ArrowUp, ArrowDown, Copy, Send, Download } from 'lucide-react'

export default function Wallet() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-8">Wallet</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Overview */}
        <div className="lg:col-span-2 crypto-card rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Wallet Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="crypto-card rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">₿</span>
                  </div>
                  <span className="font-medium">Bitcoin</span>
                </div>
                <span className="text-sm text-gray-400">BTC</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Balance</span>
                  <span className="font-semibold">2.45 BTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Value</span>
                  <span className="text-crypto-green">$165,234.56</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Change</span>
                  <span className="text-crypto-green">+2.34%</span>
                </div>
              </div>
            </div>
            
            <div className="crypto-card rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">Ξ</span>
                  </div>
                  <span className="font-medium">Ethereum</span>
                </div>
                <span className="text-sm text-gray-400">ETH</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Balance</span>
                  <span className="font-semibold">15.67 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Value</span>
                  <span className="text-crypto-green">$26,639.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Change</span>
                  <span className="text-crypto-green">+1.87%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="font-semibold mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-crypto-green bg-opacity-20 rounded-full flex items-center justify-center">
                    <ArrowUp className="text-crypto-green text-xs" />
                  </div>
                  <div>
                    <p className="font-medium">Received BTC</p>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-crypto-green">+0.5 BTC</p>
                  <p className="text-sm text-gray-400">$33,750.00</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-crypto-red bg-opacity-20 rounded-full flex items-center justify-center">
                    <ArrowDown className="text-crypto-red text-xs" />
                  </div>
                  <div>
                    <p className="font-medium">Sent ETH</p>
                    <p className="text-sm text-gray-400">1 day ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-crypto-red">-2.0 ETH</p>
                  <p className="text-sm text-gray-400">$3,400.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wallet Actions */}
        <div className="crypto-card rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          
          <div className="space-y-4">
            <button className="w-full bg-primary hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Send className="w-4 h-4 mr-2" />
              Send
            </button>
            
            <button className="w-full bg-crypto-green hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <ArrowUp className="w-4 h-4 mr-2" />
              Receive
            </button>
            
            <button className="w-full bg-secondary hover:bg-opacity-80 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Copy className="w-4 h-4 mr-2" />
              Copy Address
            </button>
            
            <button className="w-full bg-gray-600 hover:bg-gray-500 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="font-semibold mb-3">Wallet Address</h3>
            <div className="bg-dark-light rounded-lg p-3">
              <p className="text-sm text-gray-400 break-all">
                0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6
              </p>
            </div>
            <button className="w-full mt-2 text-primary text-sm hover:underline">
              Copy Address
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}