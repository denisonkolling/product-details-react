import React, { useState } from 'react';

const ProductPage = () => {
	
  const [images, setImages] = useState({
		img1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Tenis_Ultraboost_Light_Branco_HQ6351_01_standard.jpg',
		img2: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba851b9b2ce6421597deaf6901304b50_9366/Tenis_Ultraboost_Light_Branco_HQ6351_04_standard.jpg',
		img3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3edb4fb148945ab9232af6901305939_9366/Tenis_Ultraboost_Light_Branco_HQ6351_05_standard.jpg',
		img4: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e192498783574ddb9137af6901302c6c_9366/Tenis_Ultraboost_Light_Branco_HQ6351_06_standard.jpg',
	});

  const [activeImg, setActiveImage] = useState(images.img1)

  const [amount, setAmount] = useState(1);

  return (
    <div className='flex flex-col justify-between m-10 lg:flex-row gap-16 lg:items-center'>
        <div className='flex flex-col gap-6 lg:w-2/4'>
            <img src={activeImg} alt="" className='h-96 aspect-square object-cover rounded-xl'/>
            <div className='flex flex-row justify-between h-24'>
                <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
            </div>
        </div>
        <div className='flex flex-col gap-4 lg:w-2/4'>
            <div>
                <span className=' text-violet-600 font-semibold'>Running</span>
                <h1 className='text-3xl font-bold'>TÊNIS ULTRABOOST LIGHT</h1>
            </div>
            <p className='text-gray-700'>
            Experimente a energia épica do novo Ultraboost Light, nosso Ultraboost mais leve de todos. A mágica está na entressola Light BOOST, uma nova geração do adidas BOOST. Seu design exclusivo de moléculas alcança a espuma BOOST mais leve até hoje e apresenta uma pegada de carbono 10% menor do que os modelos anteriores. Centenas de cápsulas BOOST com energia, amortecimento e conforto de sobra, para que alguns pés possam ter o máximo disso tudo.
            </p>
            <h6 className='text-2xl font-semibold'>R$ 1.199.00</h6>
            <div className='flex flex-row items-center gap-12'>
                <div className='flex flex-row items-center'>
                    <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                    <span className='py-4 px-6 rounded-lg'>{amount}</span>
                    <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                </div>
                <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
            </div>
        </div>
    </div>
)
}

export default ProductPage