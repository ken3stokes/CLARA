import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About CLARA</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted companion for digital security and privacy. Cybersecurity Learning And Risk Advisor.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/tools">Tools</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground">
              For inquiries, please visit our Resources page.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CLARA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

