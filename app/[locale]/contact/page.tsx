
'use client'
const TELEGRAM_URL = 'https://t.me/+mN1J0A1us-cxZWE1'
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(TELEGRAM_URL)}`

export default function Contact(){
  return (
    <section className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">Связаться с KORT</h1>
      <p className="mute">Сканируйте QR‑код, чтобы открыть наш Telegram-чат. Или нажмите на QR — он кликабелен.</p>
      <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-block card">
        <img src={QR} alt="Telegram QR" width={220} height={220} style={{display:'block', borderRadius:8}} />
      </a>
      <div>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Открыть Telegram-чат
        </a>
      </div>
    </section>
  )
}
