import Link from "next/link"
import { CheckIcon, ChevronRight, ChevronRightIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <div className="hidden lg:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://x.com/kathanmehtaa", "_blank")
                }
              >
                <Icons.twitter
                  width="20"
                  className="text-gray-500 dark:text-gray-600"
                />
              </Button>
            </div>

            <ThemeToggle />
            <Link
              href="/components"
              // eslint-disable-next-line tailwindcss/no-contradicting-classname
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
              )}
            >
              Get Started
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
