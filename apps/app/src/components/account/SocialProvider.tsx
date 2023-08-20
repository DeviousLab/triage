import { OAuthStrategy } from '@clerk/types';
import { useSignIn } from '@clerk/clerk-react';

const SocialProvider = () => {
	const { signIn, isLoaded } = useSignIn();

	if (!isLoaded) {
		return null;
	}

	const signInWith = (strategy: OAuthStrategy) => {
		return signIn.authenticateWithRedirect({
			strategy,
			redirectUrl: '/account/sso-callback',
			redirectUrlComplete: '/',
		});
	};

	return (
		<div className='mt-2'>
			<button
				type='button'
				className='inline-flex w-full items-center justify-center gap-2 rounded-md border mb-2 bg-white py-3 px-4 align-middle text-sm font-medium text-logo shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white'
				onClick={() => signInWith('oauth_google')}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					height='1.25em'
					viewBox='0 0 600 600'
					width='1.25em'
				>
					<path
						d='M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
						fill='#4285f4'
					/>
					<path
						d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z'
						fill='#34a853'
					/>
					<path
						d='M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z'
						fill='#fbbc04'
					/>
					<path
						d='M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
						fill='#ea4335'
					/>
				</svg>
				Sign in with Google
			</button>
			<button
				type='button'
				className='inline-flex w-full items-center justify-center gap-2 rounded-md border bg-white py-3 px-4 align-middle text-sm font-medium text-logo shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white'
				onClick={() => signInWith('oauth_facebook')}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					height='1.25em'
					stroke='none'
					viewBox='0 0 24 24'
					width='1.25em'
				>
					<path
						d='M12 23.9999C18.6274 23.9999 24 18.6273 24 11.9999C24 5.37256 18.6274 0 12 0C5.37258 0 0 5.37256 0 11.9999C0 18.6273 5.37258 23.9999 12 23.9999Z'
						fill='#1977F3'
					/>
					<path
						d='M16.6717 15.4696L17.2033 12H13.8755V9.74886C13.8755 8.80047 14.3396 7.87402 15.8313 7.87402H17.345V4.92085C17.345 4.92085 15.9714 4.68628 14.6585 4.68628C11.918 4.68628 10.1258 6.34681 10.1258 9.35567V12H7.07812V15.4696H10.1258V23.8549C10.7367 23.9511 11.3628 24 12.0006 24C12.6385 24 13.2646 23.9494 13.8755 23.8549V15.4696H16.6717Z'
						fill='white'
					/>
				</svg>
				Sign in with Facebook
			</button>
		</div>
	);
};
export default SocialProvider;
