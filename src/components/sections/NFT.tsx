'use client'

import { Image, Plus, ArrowUp } from 'lucide-react'

export default function NFT() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-8">NFT Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="crypto-card rounded-xl p-6">
          <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center">
            <Image className="text-white text-4xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Crypto Punk #1234</h3>
          <p className="text-gray-400 text-sm mb-3">Rare collectible NFT</p>
          <div className="flex justify-between items-center">
            <span className="text-crypto-green font-semibold">2.5 ETH</span>
            <button className="bg-primary px-3 py-1 rounded text-sm hover:bg-opacity-80">
              Trade
            </button>
          </div>
        </div>
        
        <div className="crypto-card rounded-xl p-6">
          <div className="aspect-square bg-gradient-to-br from-crypto-green to-primary rounded-lg mb-4 flex items-center justify-center">
            <Image className="text-white text-4xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Bored Ape #5678</h3>
          <p className="text-gray-400 text-sm mb-3">Exclusive membership</p>
          <div className="flex justify-between items-center">
            <span className="text-crypto-green font-semibold">15.0 ETH</span>
            <button className="bg-primary px-3 py-1 rounded text-sm hover:bg-opacity-80">
              Trade
            </button>
          </div>
        </div>
        
        <div className="crypto-card rounded-xl p-6">
          <div className="aspect-square bg-gradient-to-br from-secondary to-crypto-red rounded-lg mb-4 flex items-center justify-center">
            <Image className="text-white text-4xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Doodle #9012</h3>
          <p className="text-gray-400 text-sm mb-3">Limited edition</p>
          <div className="flex justify-between items-center">
            <span className="text-crypto-green font-semibold">8.75 ETH</span>
            <button className="bg-primary px-3 py-1 rounded text-sm hover:bg-opacity-80">
              Trade
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="crypto-card rounded-xl p-6 w-full border-2 border-dashed border-gray-600 hover:border-primary transition-colors">
          <div className="text-center">
            <Plus className="text-4xl text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400">Add New NFT</p>
          </div>
        </button>
      </div>
    </div>
  )
}