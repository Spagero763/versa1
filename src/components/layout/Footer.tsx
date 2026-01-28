'use client';

import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">VersaGames</h3>
            <p className="text-sm text-muted-foreground">
              Your destination for classic games with a modern twist.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Games</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/chess" className="hover:text-primary transition-colors">Chess</Link></li>
              <li><Link href="/checkers" className="hover:text-primary transition-colors">Checkers</Link></li>
              <li><Link href="/tic-tac-toe" className="hover:text-primary transition-colors">Tic-Tac-Toe</Link></li>
              <li><Link href="/scrabble" className="hover:text-primary transition-colors">Scrabble</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">More Games</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/puzzle" className="hover:text-primary transition-colors">Sliding Puzzle</Link></li>
              <li><Link href="/memory-game" className="hover:text-primary transition-colors">Memory Match</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VersaGames. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
