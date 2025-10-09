import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
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
            <a href="#book" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
              Calendar Booking
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-primary/0 text-foreground hover:text-white hover:bg-primary">
              <Link href="https://dev.azai.ch">Client Login</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-foreground hover:bg-primary/90">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle className="sr-only text-primary">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 grid gap-2">
                  <Link href="/" className="py-2 text-base font-medium text-foreground hover:text-foreground/70 ml-4">
                    Home
                  </Link>
                  <Link href="/#features" className="py-2 text-base font-medium text-foreground hover:text-foreground/70 ml-4">
                    Features
                  </Link>
                  <a href="#book" className="py-2 text-base font-medium text-foreground hover:text-foreground/70 ml-4">
                    Calendar Booking
                  </a>
                </nav>
                <div className="mt-6 grid gap-2">
                  <Button asChild variant="outline" className="justify-start hover:bg-primary ml-4 mr-4">
                    <Link href="https://dev.azai.ch">Client Login</Link>
                  </Button>
                  <Button asChild className="justify-start bg-primary text-primary-foreground hover:bg-primary/90 ml-4 mr-4">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
