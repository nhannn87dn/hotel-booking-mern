import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
            <meta name="copyright" content="Ecshopvietnam.com" />
            <meta name="author" content="NobjNguyen" />
            <meta http-equiv="audience" content="General" />
            <meta name="resource-type" content="Document" />
            <meta name="distribution" content="Global" />
            <meta name="revisit-after" content="1 days" />
            <link type="image/x-icon" href="/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument