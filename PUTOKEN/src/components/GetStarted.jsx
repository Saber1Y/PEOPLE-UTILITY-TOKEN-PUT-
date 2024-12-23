import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
	return (
		<div
			className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient mb-[40px] p-[2px] cursor-pointer `}>
			<div
				className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full circle-btn`}>
				<div className={`${styles.flexStart} flex-row`}>
					<p className='font-normal font-medium text-[18px] leading-[23px] mr-2'>
						<span className='text-gradient'>Learn</span>
					</p>
					<img
						src={arrowUp}
						alt=''
						className='w-[23px] h-[23px] object-contain'
					/>
				</div>
				<p className='font-normal font-medium text-[18px] leading-[23px]'>
					<span className='text-gradient'>More</span>
				</p>
			</div>
		</div>
	);
};

export default GetStarted;
