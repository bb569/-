import React from 'react'
import Link from "next/link";
interface BuildingProps {
  img1: string;
  title: string;
  point: number;
  review: string;
  document: string;
  adres: string;
  t1: string
  t2: string
  t3: string
  t4: string
  t5: string
  t6: string
  t7: string
}

function Building1(props: { i: BuildingProps }) {
  return (


    <div className="rounded-sm cursor-pointer h-96 m-24 hover:bg-neutral-700 duration-500 my-4 col-span-7 sm:col-span-6 md:col-span-4 lg:col-span-3 grid grid-cols-12 sm:m-6 md:m-2 xl:m-6 border border-neutral-700">
      <div className="col-span-12 sm:h-3/5 hover:p-0 p-3 duration-500 relative">
        <div className='h-56 relative flex z-20 rounded-md bg-black opacity-0 hover:opacity-75 duration-500'>
          <ul className='w-full text-center'>
            <li className="text-xs font-sans py-1">{props.i.t1}</li>
            <li className="text-xs font-sans py-1">{props.i.t2}</li>
            <li className="text-xs font-sans py-1">{props.i.t3}</li>
            <li className="text-xs font-sans py-1">{props.i.t4}</li>
            <li className="text-xs font-sans py-1">{props.i.t5}</li>
            <li className='text-xl py-2 xl:text-base md:text-sm sm:text-base'>{props.i.t6}</li>
            <li className=' w-full md:text-xs xl:text-sm'>آدرس: {props.i.adres}</li>
            <li className='text-xs'>شماره تماس:<br/>{props.i.t7}</li>
          </ul>
          
        </div>
        <img className='h-56 w-full rounded-sm relative bottom-56' src={props.i.img1} alt="" />
        <div className="flex relative w-1/6 bottom-64 items-center justify-center rounded-md text-white text-xs h-6 opacity-85 bg-neutral-700">
          <p className=" ">{props.i.point}</p>
          <img src="https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000" alt="" className="w-3 h-3 " />
        </div>
        <p className='sm:text-xs text-sm text-center relative bottom-60 h-20 overflow-hidden w-52 m-auto leading-1'>{props.i.title}...</p>
        <div className='flex justify-around p-2 h-14 border-t relative bottom-60 border-stone-700 col-span-12'>
          <Link href={`/Adverts`} className='rounded-md duration-200 hover:bg-transparent border border-white bg-primary hover:text-primary h-9`'>
            <button className='md:text-xs xl:text-sm text-sm  relative top-1 p-1 '>مشاهده‌فروشگاه</button>
          </Link>
          <Link href={`/Watcher`} className='rounded-md duration-200 border hover:bg-transparent font-thin hover:bg-stone-800 border-primary hover:border-white bg-transparent hover:text-primary h-9'>
            <button className=' md:text-xs xl:text-sm text-sm relative top-1 p-1 '>افزودن‌به‌دیده‌بان</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

function Building2() {
  const ids: BuildingProps[] = [{
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/h/l/d/aqua-blue-polycotton-3-2-2-1-fu-aqua-blue-light-grey-lhs-furny-original-imahfdggrhcjez3z.jpeg?q=70",
    title: "خرید اینترنتی جدیدترین مدل های ست مبل راحتی مدرن،چستر،تک نفره،سبک و چوبی ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
   t6: "تا 50% تخفیف",
    t7: "09305564033"
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/h/l/d/aqua-blue-polycotton-3-2-2-1-fu-aqua-blue-light-grey-lhs-furny-original-imahfdggrhcjez3z.jpeg?q=70",
    title: "فروشگاه اینترنتی مبلمان و دکوراسیون با تخفیف ویژه در تهران با ارسال به سراسر ایران، قیمت و خرید اینترنتی مبلمان و دکوراسیون",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
  t6: "تا 50% تخفیف",
    t7: "09305564033" 
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/i/o/m/blue-jute-3-2-1-6st-pkt-blue-hn-divine-arts-honey-2-original-imah24ef5mz63aya.jpeg?q=70",
    title: "خرید زیر قیمت بازار مبل تهران - تخفیفات ویژه با ارسال رایگان - بهترین کیفیت را از ما بخواهید.",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
  t6: "تا 50% تخفیف",
    t7: "09305564033" 
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/k/v/g/68-58-68-58-brown-cotton-blend-3-2-1-177-8-28-71-12-36-21-124-46-original-imah3r3yj5b6yu8n.jpeg?q=70",
    title: "جربه خرید آنلاین و بدون واسطه از بزرگترین بازار مبلمان کشور را تجربه کنید متنوع ترین محصولات صنعت مبلمان, سرویس خواب، میز و لوازم اداری",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
  t6: "تا 50% تخفیف",
    t7: "09305564033" 
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/z/g/t/53-5-107-firozi-polyester-3-2-1-82-35-82-60-20-82-xp-7s7p1cf-153-original-imahfjapgpmcnzuy.jpeg?q=70",
    title: "خرید اقساطی جدیدترین مبلمان راحتی، ال، تختخواب شو، کلاسیک، ناهارخوری، جلومبلی، میز تلویزیون ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
  t6: "تا 50% تخفیف",
    t7: "09305564033" 
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/z/g/t/53-5-107-firozi-polyester-3-2-1-82-35-82-60-20-82-xp-7s7p1cf-153-original-imahfjapgpmcnzuy.jpeg?q=70",
    title: "عرضه محصولاتی همچون مبل راحتی، سرویس خواب، انواع مبل سلطنتی و انواع میز",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
  t6: "تا 50% تخفیف",
    t7: "09305564033" 
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/l4pxk7k0/sofa-set/b/w/z/cream-cotton-blend-3-2-1-sf-sss-172-saamenia-furnitures-natural-original-imagfjt8cugzk5af.jpeg?q=70",
    title: "ارائه دهنده انواع لوازم خانگی، مبلمان منزل، دکوراسیون و لوازم اداری، مبلمان باغی، صندلی اداری، صندلی خانگی، انواع میز اداری و خانگی",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
  t6: "تا 50% تخفیف",
    t7: "09305564033" 
  }, {
    img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/u/n/c/89-89-woody-brown-polyester-3-2-1-191-38-9-84-50-3-29-8-137-bae-original-imagvz7yystfngsf.jpeg?q=70",
    title: "بزرگترین فروشگاه آنلاین مبلمان و انواع صندلی های مدرن ; صندلی · صندلی ناهار خوری · صندلی میز تحریر · صندلی راکینگ · صندلی اپن · صندلی باغی ; مبل · مبل تک · مبل دو ",
    point: 4.4,
    review: "2000 Reviews",
    document: "چوب طبیعی گردو و ساج",
    adres: "تهران‌سیدخندان",
    t1: "مبلمان اداری",
    t2: "مبلمان تجاری",
    t3: "مبلمان لوکس",
    t4: "مبلمان راحتی",
    t5: "مبلمان پذیرایی",
  t6: "تا 50% تخفیف",
    t7: "09305564033" 
  }];

  return (
    <div className="flex flex-col sm:grid grid-cols-12 mx-3">
      {ids.map((id, index) => (
        <Building1 key={index} i={id} />
      ))}
    </div>
  )
}

export default Building2;