import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Azai home" className="flex items-center">
            <Image src="/logo_dark.png" alt="Azai Logo" width={60} height={32} priority />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
              Home
            </Link>
            <Link
              href="/#features"
              className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              Features
            </Link>
            <a
              href="#book"
              className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              Calendar Booking
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* <Button variant="ghost" className="text-sm font-medium text-foreground hover:bg-primary/90"> */}
            <Button asChild className="bg-primary/0 text-foreground hover:text-white hover:bg-primary">
              <Link href="https://dev.azai.ch">Client Login</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
