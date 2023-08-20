import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider {...pageProps}>
			<Toaster position='bottom-right' reverseOrder={false} />
			<Component {...pageProps} />
		</ClerkProvider>
	);
}

export default MyApp;
