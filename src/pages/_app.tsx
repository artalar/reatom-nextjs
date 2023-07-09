import '~/styles/globals.css'
import { useMemo } from 'react'
import type { AppProps } from 'next/app'
import { createCtx, connectLogger } from '@reatom/framework'
import { reatomContext } from '@reatom/npm-react'

export default function App({ Component, pageProps }: AppProps) {
  const ctx = useMemo(() => {
    const ctx = createCtx()
    if (typeof window !== undefined) connectLogger(ctx)
    return ctx
  }, [])

  return (
    <reatomContext.Provider value={ctx}>
      <Component {...pageProps} />
    </reatomContext.Provider>
  )
}
