import React from 'react'
import Slider from '../component/Slider'
import Card from '../component/Card'
import image1 from "../assets/img1.jpg"
import image2 from "../assets/img2.jpg"
import image3 from "../assets/img3.jpg"
import image4 from "../assets/img4.jpg"
import image5 from "../assets/branddescription.jpg"
import Categories from '../component/Route/Categories/Categories'

export default function Home() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='max-w-[100vw] item-center'>
            <Slider/>
            <Categories/>
        </div>

        <div className='bg-white-900 w-auto flex mp-10 mt-5 h-auto items-center flex-row'>
        <div className="w-1/2 "><img src={image5} alt="Website Image"/></div>
        <div className="w-1/2 p-8">
        <h1 className="text-6xl font-bold mb-4">Brand Franchise</h1>
         <p className='text-pink font-lemon'>
         Discover a world of unparalleled shopping at. We bring you a curated collection of the finest products, carefully selected to enhance your lifestyle. From fashion to electronics, home decor to beauty essentials, we've got everything you need.
         At Adorify, we're more than an online store; we're your partner in enhancing your lifestyle. Start exploring and indulge in a world of premium products and exceptional service.
            </p>
            <p className='text-2xl'><u>Featured Categories:</u></p>
            <ul className="list-disc">
            <li><b>Fashion</b>: Elevate your style with the latest trends in fashion. From casual wear to formal attire, we have you covered.</li>  
            <li><b>Electronics</b>: Stay connected and entertained with our cutting-edge electronics selection. Discover the latest tech and gadgets innovations.</li>
            <li><b>Home and Living</b>: Transform your living space with our curated home decor and furnishings. Create a home that reflects your style.</li>
            <li><b>Beauty and Wellness</b>: Pamper yourself with our range of beauty and wellness products. Feel good, look good, and embrace self-care.</li>
            </ul>
            <p>
            Why Shop With Us? Wide Range of Products: Explore a vast assortment of products from top brands and emerging designers. Our diverse catalog ensures there's something for everyone.
           Quality Assurance: We prioritize quality and authenticity. Rest assured that each product is meticulously vetted to meet the highest standards, delivering an exceptional shopping experience.Happy Shopping!


          </p>
            <button className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center 
            decoration-none bg-pink-800 border-white border-[2px] rounded-[10px]  shadow-white shadow-[5px_5px_0px_black] duration-[0.3s] hover:bg-white hover:text-[#ff5252] hover:border-[#ff5252] hover:shadow-[#ff5252] active:bg-[#fcf414] active:shadow-none active:translate-y-[4px]'>Shop Now</button>
            </div>
            </div>
            

        <div className='flex flex-row'>
          <Card title={"Gifts"} image={"https://photo-cdn2.icons8.com/MGjemFbp12jzlMnfSypbdtHXBWuNRNfQ784o_rj6uE4/rs:fit:1608:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODgzLzgwODM0/Y2MyLWFiNzctNDUw/NS1hZGEyLTQxNWQ4/YTkyMzVjZi5qcGc.jpg"}/>
          <Card title={"Perfumes"} image={"https://photo-cdn2.icons8.com/MGjemFbp12jzlMnfSypbdtHXBWuNRNfQ784o_rj6uE4/rs:fit:1608:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODgzLzgwODM0/Y2MyLWFiNzctNDUw/NS1hZGEyLTQxNWQ4/YTkyMzVjZi5qcGc.jpg"}/>
          <Card title={"Softtoys"} image={"https://photo-cdn2.icons8.com/MGjemFbp12jzlMnfSypbdtHXBWuNRNfQ784o_rj6uE4/rs:fit:1608:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODgzLzgwODM0/Y2MyLWFiNzctNDUw/NS1hZGEyLTQxNWQ4/YTkyMzVjZi5qcGc.jpg"} />
          <Card title={"Electronics"} image={"https://photo-cdn2.icons8.com/MGjemFbp12jzlMnfSypbdtHXBWuNRNfQ784o_rj6uE4/rs:fit:1608:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODgzLzgwODM0/Y2MyLWFiNzctNDUw/NS1hZGEyLTQxNWQ4/YTkyMzVjZi5qcGc.jpg"} />
          <Card title={"Make-ups"} image={"https://photo-cdn2.icons8.com/MGjemFbp12jzlMnfSypbdtHXBWuNRNfQ784o_rj6uE4/rs:fit:1608:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODgzLzgwODM0/Y2MyLWFiNzctNDUw/NS1hZGEyLTQxNWQ4/YTkyMzVjZi5qcGc.jpg"} />
        </div>


        <div className="flex flex-col items-center">
      <img src={image1} alt="Image 1" className="mb-4" style={{ width: '1000px', height: 'auto'}} />
      <img src={image2} alt="Image 2" className="mb-4" style={{ width: '1000px', height: 'auto'}} />
      <img src={image3} alt="Image 3" className="mb-4" style={{ width: '1000px', height: 'auto'}}/>
      <img src={image4} alt="Image 4" className="mb-4" style={{ width: '1000px', height: 'auto'}}/>
    </div>


    </div>




  )
}
