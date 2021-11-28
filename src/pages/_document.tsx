import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

const JULIUS_SANS_ONE = 'https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap';
const POTTA_ONE = 'https://fonts.googleapis.com/css2?family=Potta+One&display=swap';
const HACHI_MARU_POP = 'https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap';
const YOMOGI = 'https://fonts.googleapis.com/css2?family=Yomogi&display=swap';
const MEGRIM = 'https://fonts.googleapis.com/css2?family=Megrim&display=swap';
const MONOFETT = 'https://fonts.googleapis.com/css2?family=Monofett&display=swap';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='ja-JP'>
        <Head>
          <meta name='application-name' content='coperu' />
          <meta name='theme-color' content='#FFF' />
          <meta name='description' content='Parent and Child matching' />
          <link rel='stylesheet' href={JULIUS_SANS_ONE} />
          <link rel='stylesheet' href={POTTA_ONE} />
          <link rel='stylesheet' href={HACHI_MARU_POP} />
          <link rel='stylesheet' href={YOMOGI} />
          <link rel='stylesheet' href={MEGRIM} />
          <link rel='stylesheet' href={MONOFETT} />
          <link rel='apple-touch-icon' href='/images/icons/icon-192x192.png'></link>
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
