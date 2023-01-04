import Head from 'next/head'
import { LogIcon, LogInput  } from '../components/webcomponents'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logistic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/logo.png" />
      </Head>

      <main>
        <LogIcon name='error' color='success'/>
        <LogInput status={{status: 'success', text: 'Tem algo errado ai'}}/>
      </main>

    </div>
  )
}
