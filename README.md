# CryptoFlow - Professional DApp

A modern, modular Next.js + React application converted from the original HTML/CSS/JavaScript implementation.

## Features

- **Modular React Components**: Clean separation of concerns with reusable components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Custom styling with dark mode support
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Local Dependencies**: No external API calls or environment configuration required

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS classes
│   ├── layout.tsx           # Root layout with dark mode
│   └── page.tsx             # Main page with login/app state
├── components/
│   ├── LoginScreen.tsx      # Login screen component
│   ├── MainApp.tsx          # Main application wrapper
│   ├── Header.tsx           # Navigation header component
│   └── sections/
│       ├── Dashboard.tsx    # Dashboard section
│       ├── Package.tsx      # Investment packages
│       ├── NFT.tsx          # NFT collection
│       ├── Trade.tsx        # Trading interface
│       ├── Stake.tsx        # Staking pools
│       └── Wallet.tsx       # Wallet management
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Key Components

### LoginScreen
- Google login simulation with loading state
- Responsive design with gradient background
- Terms and conditions display

### MainApp
- State management for active section
- Mobile menu toggle functionality
- Section routing and rendering

### Header
- Desktop and mobile navigation
- User profile display
- Active section highlighting

### Sections
Each section is a standalone component with specific functionality:
- **Dashboard**: Portfolio overview and recent activity
- **Package**: Investment package selection
- **NFT**: NFT collection display and minting
- **Trade**: Cryptocurrency trading interface
- **Stake**: Staking pool management
- **Wallet**: Portfolio balance and transactions

## Styling

The application uses custom Tailwind CSS configuration with:
- Custom color palette matching the original design
- Dark mode support
- Custom CSS classes for crypto-specific styling
- Responsive breakpoints for mobile/desktop

## Dependencies

- **Next.js 14**: React framework with App Router
- **React 18**: Latest React features
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

## Development

The application is built with modern React patterns:
- Functional components with hooks
- TypeScript for type safety
- Client-side state management
- Responsive design principles
- Accessibility considerations

No external APIs or environment variables are required - all data is simulated for demonstration purposes.
# react-dapp-minimalis
