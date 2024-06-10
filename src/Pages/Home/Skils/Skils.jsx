import skil1 from '../../../assets/New folder/html-5.png'
import skil2 from '../../../assets/New folder/img2.png'
import skil3 from '../../../assets/New folder/img3.png'
import skil4 from '../../../assets/New folder/img4.png'
import skil5 from '../../../assets/New folder/img5.png'
import skil6 from '../../../assets/New folder/img6.png'
import skil7 from '../../../assets/New folder/img7.png'
import skil8 from '../../../assets/New folder/img8.png'


const Skils = () => {
    return (
<section className="p-6 bg-[#f9f9f9] dark:text-gray-800">
	<div className="container p-4 mx-auto text-center">
		<h2 className="text-4xl font-bold my-8">What you can learn</h2>
	</div>
	<div className="container flex flex-wrap justify-center mx-auto dark:text-gray-600">
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='w-20' src={skil1} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<img className='w-20' src={skil2} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='w-20' src={skil3} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='w-20' src={skil4} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='w-20' src={skil5} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='w-20' src={skil6} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='w-20' src={skil7} alt="" />
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
		<img className='w-20' src={skil8} alt="" />
		</div>
	</div>
</section>
    );
};

export default Skils;