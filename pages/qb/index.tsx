import { QBTOuchdowns } from "@/components/qb-touchdowns"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFL Stats</title>
      </Head>
      <main>
        <h1>Quarterback Stats</h1>
        <section>
          <QBTOuchdowns />
        </section>
      </main>
    </div>
  )
}
