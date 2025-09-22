
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function Home(){
  const t = await getTranslations('home')
  return (
    <div className="relative">
      <div aria-hidden className="bgflow" />
      <section className="relative py-24 sm:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm tracking-widest uppercase text-ink/60">KORT</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">{t('heroTitle')}</h1>
            <p className="mt-5 mute max-w-2xl">{t('heroSubtitle')}</p>
            <div className="mt-8 flex gap-3">
              <a href="#steps" className="btn btn-primary">{t('ctaHow')}</a>
              <Link href="/contact" className="btn">{t('ctaQuote')}</Link>
            </div>
            <div className="mt-6 text-xs text-ink/50">{t('legal')}</div>
          </div>
        </div>
      </section>

      <section id="steps" className="relative py-16 sm:py-24 border-t border-white/5">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('stepsTitle')}</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {[t('step1'), t('step2'), t('step3')].map((s:any, i:number) => (
              <li key={i} className="card">
                <div className="text-xs uppercase tracking-widest text-ink/60">{t('step')} {i+1}</div>
                <div className="mt-2 text-lg font-medium">{s.title}</div>
                <p className="mt-2 text-sm mute">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 border-t border-white/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('eliteTitle')}</h2>
          <p className="mt-5 mute">{t('eliteDesc')}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 text-sm">
            {[t('elite1'), t('elite2'), t('elite3')].map((x:string,i:number)=> (
              <li key={i} className="card">{x}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">{t('ctaQuote')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
