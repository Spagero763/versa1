'use client';

import { LogIn, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePrivy } from '@privy-io/react-auth';
import { Button } from '../ui/button';
import Logo from '../icons/Logo';
import { useState } from 'react';

export default function Header() {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          aria-label="VersaGames Home"
        >
          <Logo className="h-6 w-6" aria-hidden="true" />
          <span className="font-bold sm:inline-block font-headline text-lg">
            VersaGames
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
          <Link href="/chess" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Chess
          </Link>
          <Link href="/checkers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Checkers
          </Link>
          <Link href="/tic-tac-toe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Tic-Tac-Toe
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {ready &&
            (authenticated ? (
              <Button 
                onClick={logout} 
                variant="outline"
                aria-label="Logout from your account"
              >
                <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            ) : (
              <Button 
                onClick={login}
                aria-label="Login to your account"
              >
                <LogIn className="mr-2 h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            ))}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav 
          className="md:hidden border-t bg-background/95 backdrop-blur"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container py-4 flex flex-col space-y-3">
            <Link 
              href="/chess" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chess
            </Link>
            <Link 
              href="/checkers" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Checkers
            </Link>
            <Link 
              href="/tic-tac-toe" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tic-Tac-Toe
            </Link>
            <Link 
              href="/scrabble" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Scrabble
            </Link>
            <Link 
              href="/puzzle" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sliding Puzzle
            </Link>
            <Link 
              href="/memory-game" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Memory Match
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
