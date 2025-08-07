'use client'

import { useState } from 'react'
import { Coins, User, Menu, TrendingUp, Package, Image, ArrowLeftRight, Wallet } from 'lucide-react'

type Section = 'dashboard' | 'package' | 'nft' | 'trade' | 'stake' | 'wallet'

interface HeaderProps {
  userName: string
  activeSection: Section
  onSectionChange: (section: Section) => void
  isMobileMenuOpen: boolean
  onMobileMenuToggle: () => void
}

const navigationItems = [
  { id: 'dashboard' as Section, label: 'Dashboard', icon: TrendingUp },
  { id: 'package' as Section, label: 'Package', icon: Package },
  { id: 'nft' as Section, label: 'NFT', icon: Image },
  { id: 'trade' as Section, label: 'Trade', icon: ArrowLeftRight },
  { id: 'stake' as Section, label: 'Stake', icon: Coins },
  { id: 'wallet' as Section, label: 'Wallet', icon: Wallet },
]

export default function Header({ 
  userName, 
  activeSection, 
  onSectionChange, 
  isMobileMenuOpen, 
  onMobileMenuToggle 
}: HeaderProps) {
  return (
    <header className="bg-dark-light border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Coins className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold">CryptoFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`nav-btn px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300'
                  }`}
                >
                  <Icon className="mr-2 w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">{userName}</p>
              <p className="text-xs text-gray-400">Connected</p>
            </div>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <User className="text-sm" />
            </div>
            <button 
              onClick={onMobileMenuToggle}
              className="md:hidden p-2"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-light border-t border-gray-700">
          <div className="px-4 py-3 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id)
                    onMobileMenuToggle()
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300'
                  }`}
                >
                  <Icon className="mr-3 w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}