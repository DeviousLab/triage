import Link from 'next/link';

import Logo from '../../assets/images/temp-logo.svg';

const Header = () => {
	return (
		<header>
			<div className='container mx-auto flex flex-col flex-wrap items-center p-5'>
				<Link legacyBehavior href={'https://mytriage-app.vercel.app/'}>
					<a className='mb-4 flex items-center font-medium text-gray-900 md:mb-0 lg:justify-center'>
						<img
							className='w-8 cursor-pointer'
							src={Logo.src}
							alt='triage logo'
						/>
						<span className='ml-2 font-Poppins text-xl font-bold text-logo'>
							triage
						</span>
					</a>
				</Link>
			</div>
		</header>
	);
};
export default Header;
