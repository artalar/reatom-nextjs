import type { AppProps } from 'next/app'
import { connectLogger } from '@reatom/framework'
import { reatomContext, useCreateCtx } from '@reatom/npm-react'

export default function App({ Component, pageProps }: AppProps) {
  const ctx = useCreateCtx((ctx) => {
    if (typeof window !== undefined) connectLogger(ctx)
  })

  return (
    <reatomContext.Provider value={ctx}>
      <Component {...pageProps} />
    </reatomContext.Provider>
  )
}
