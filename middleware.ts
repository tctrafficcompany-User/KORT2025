import createMiddleware from 'next-intl/middleware'
export default createMiddleware({locales:['en','ru','ar'],defaultLocale:'en'})
export const config={matcher:['/((?!_next|.*\\..*).*)']}
