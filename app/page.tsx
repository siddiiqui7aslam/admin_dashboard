import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Welcome to the <span className="text-primary">Admin Dashboard</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A simple admin dashboard built with Next.js and TypeScript. Manage users, add new ones, 
        and explore the features.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/dashboard">
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/dashboard/add">
            Add New User
          </Link>
        </Button>
      </div>
    </div>
  );
}