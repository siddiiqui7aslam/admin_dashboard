import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Users, Plus } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Admin Dashboard
            </span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link 
              href="/dashboard" 
              className="flex h-9 items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Dashboard
            </Link>
            <Link 
              href="/dashboard/add" 
              className="flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add User
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}