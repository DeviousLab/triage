import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Dashboard from '../assets/images/dashboard.svg';
import Reports from '../assets/images/reports.svg';
import Analysis from '../assets/images/analysis.svg';

const Hero = () => {
	const slides = [Dashboard.src, Reports.src, Analysis.src];
	return (
		<section className='overflow-y-hidden py-12'>
			<div className='w-full px-6'>
				<div className="container relative mx-auto mt-8 flex flex-col items-center rounded-lg bg-primary bg-[url('/img/ProcessPattern.svg')] bg-cover bg-no-repeat pt-12 pb-24 sm:pt-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
					<motion.div
						className='mb-5 w-11/12 sm:mb-10 sm:w-2/3'
						initial={{ y: 300, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeOut', duration: 1.5 },
						}}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h1 className='text-center font-Inter text-2xl leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
							Track your lab results
						</h1>
						<p className='mt-2 text-center font-Arimo text-white'>
							If you&apos;re looking for a way to keep track of your blood test
							results, look no further than{' '}
							<span className='font-extrabold'>triage</span>. With our
							easy-to-use interface, you can easily track your results over time
							and spot any trends that may emerge.
						</p>
					</motion.div>
					<motion.div
						className='mb-10 flex items-center justify-center sm:mb-20'
						initial={{ y: 300, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeOut', duration: 2 },
						}}
					>
						<button className='rounded-3xl border bg-white px-4 py-1 font-Arimo text-sm text-accent transition duration-300 ease-in-out hover:border-white hover:bg-accent	hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:px-8 sm:py-3 lg:text-xl'>
							Learn more
						</button>
					</motion.div>
				</div>
				<div className='container mx-auto -mt-20 flex justify-center sm:-mt-40 md:-mt-56'>
					<div className='relative w-11/12 sm:w-2/3'>
						<motion.div
							className='drop-shadow-xl transition duration-300 ease-in hover:drop-shadow-2xl'
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									ease: 'easeOut',
									duration: 1,
									delay: 0.7,
								},
							}}
						>
							<Swiper
								pagination={{
                  clickable: true,
                }}
								modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
							>
								<SwiperSlide>
									<img src={Dashboard.src} alt='Sample dashboard page' />
								</SwiperSlide>
								<SwiperSlide>
									{' '}
									<img src={Reports.src} alt='Sample reports page' />
								</SwiperSlide>
								<SwiperSlide>
									{' '}
									<img src={Analysis.src} alt='Sample analysis page' />
								</SwiperSlide>
							</Swiper>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
