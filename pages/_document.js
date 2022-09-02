import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="../styles/globals.css" rel="stylesheet" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}