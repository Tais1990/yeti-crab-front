import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';


export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
