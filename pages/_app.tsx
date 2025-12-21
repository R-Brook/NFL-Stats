import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="w-full max-w-[1200px] m-auto">
      <Component {...pageProps} />
    </section>
  )
}
