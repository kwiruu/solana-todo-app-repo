import Head from 'next/head'
import '../styles/global.css'
// Import WalletConnectionProvider from components
import { WalletConnectProvider } from '../components/todo/WalletConnectProvider'
import '@solana/wallet-adapter-react-ui/styles.css'
// Import the solana wallet css

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
                <WalletConnectProvider>
                    <Component {...pageProps} />
                </WalletConnectProvider>
            </main>
        </>
    )
}

export default MyApp
