import {Head, Html, Main, NextScript} from 'next/document';
import {DEFAULT_BODY_CLASSNAME} from '../components/Wrapper';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={DEFAULT_BODY_CLASSNAME}>
                <Main />
                <NextScript />
            </body>
        </Html>
  );
}
