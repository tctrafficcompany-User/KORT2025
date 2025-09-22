
import '../globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider, getMessages, getLocale } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'KORT',
  description: 'Vehicle importing B2B (KR/EU/US/CN → RF)',
  alternates: { languages: { en:'/en', ru:'/ru', ar:'/ar' } }
}

export default async function RootLayout({ children }: { children: React.ReactNode }){
  const locale = await getLocale()
  const messages = await getMessages()
  const isRTL = locale === 'ar'
  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <header className="header">
            <nav className="nav">
              <Link href={`/${locale}`} className="flex items-center gap-3">
                <Image src="/kort-logo.png" alt="KORT" width={92} height={28} priority />
              </Link>
              <div className="ml-auto flex items-center gap-3 text-sm">
                <Link href={`/${locale}`} className="opacity-80 hover:opacity-100">Home</Link>
                <Link href={`/${locale}/contact`} className="opacity-80 hover:opacity-100">Contact</Link>
                <Link href={`/en`} className="btn">EN</Link>
                <Link href={`/ru`} className="btn">RU</Link>
                <Link href={`/ar`} className="btn">AR</Link>
              </div>
            </nav>
          </header>
          <main className="container py-10">{children}</main>
          <footer className="footer">
            <div className="container py-6 text-xs opacity-60 flex items-center justify-between">
              <span>© {new Date().getFullYear()} KORT</span>
              <span>KR · EU · US · CN → RF</span>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
