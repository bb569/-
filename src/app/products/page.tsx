import React from 'react'
import Link from "next/link";
interface BuildingProps {
    star: number,
    img: string,
    img2: string,
    text: string,
    text2: string,
    li1: string,
    li2: string,
    li3: string,
    li4: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string,
}

function MeinMap(props: { mins: BuildingProps }) {
    return (<>
        <div className="hover:bg-neutral-700 md:mx-8 my-5 sm:mx-32 rounded-sm border duration-500 md:col-span-6 col-span-12 cursor-pointer grid grid-cols-12 h-48 border-stone-700">
            <div className="col-span-6 relative left-4 h-full grid grid-cols-12">
                <p className="lg:text-base md:text-sm col-span-12 h-24 overflow-hidden text-right md:text-center border-b border-neutral-700 " dir='rtl'>{props.mins.text}...</p>
                <div className='relative right-0 sm:right-4 top-3 xl:top-5 md:top-0'>
                    <div className='flex justify-between w-56 relative bottom-0 sm:bottom-8 md:bottom-5 md:left-0 lg:left-5 left-5 h-0'>
                        <div className=' text-xs relative top-1'>
                            <del>{props.mins.p1}</del>
                            <br />
                            <p className='text-base text-green-300'>{props.mins.p3}</p>
                        </div>
                        <p className='xl:text-xl text-sm md:text-base lg:text-lg relative right-10 lg:right-5'>{props.mins.p2}</p>
                    </div>
                    <div className='flex lg:w-56 w-44 justify-between text-center h-7 relative top-12 sm:top-4 md:top-8 left-5 md:left-0 lg:left-5'>
                        <Link href={`/Basket`}>
                            <button className='w-32 h-full border-white border hover:text-white hover:border-primary duration-200 rounded-sm text-primary font-thin text-sm'>افزودن‌به‌سبدخرید</button>
                        </Link>
                        <Link href={`/View`}>
                            <button className='w-20 h-full border-primary border hover:bg-transparent duration-200 rounded-sm bg-primary'>مشاهده</button>
                        </Link>
                    </div>
                </div>
                <ul className="w-24 h-24 overflow-hidden relative left-40 lg:left-48 sm:hidden xl:block" dir="rtl">
                    <li className="xl:text-sm text-xs text-neutral-500 relative bottom-1">{props.mins.li1}</li>
                    <li className="xl:text-sm text-xs text-neutral-500 relative bottom-2">{props.mins.li2}</li>
                    <li className="xl:text-sm text-xs text-neutral-500 relative bottom-3">{props.mins.li3}</li>
                    <li className="xl:text-sm text-xs text-neutral-500 relative bottom-4">{props.mins.li4}</li>
                </ul>
            </div>
            <img src={props.mins.img} alt=""
                className="rounded-r-sm relative left-12 sm:left-14 xl:left-16 col-span-5 w-full h-full" />

        </div>
    </>)
}
function ShoppingBasket() {
    let Main = [
        {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/i/5/p/68-58-68-58-blue-cotton-3-2-1-177-8-28-71-12-36-21-124-46-original-imagz8ykenzwftju.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",

        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/l4pxk7k0/sofa-set/b/w/z/cream-cotton-blend-3-2-1-sf-sss-172-saamenia-furnitures-natural-original-imagfjt8cugzk5af.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/m/t/k/68-58-68-58-red-cotton-3-2-1-177-8-28-71-12-36-21-124-46-kdwe10-original-imah4f4pzf3w39hx.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/v/x/x/74-183-rich-natural-finish-na-3-2-1-183-74-183-10-183-74-6-seter-original-imah54gszk2wggse.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/y/a/g/grey-polyester-3-2-1-va-sofaset-03-veenuarts-walnut-finish-original-imah34y2w7by87gw.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/h/l/d/aqua-blue-polycotton-3-2-2-1-fu-aqua-blue-light-grey-lhs-furny-original-imahfdggrhcjez3z.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/i/o/m/blue-jute-3-2-1-6st-pkt-blue-hn-divine-arts-honey-2-original-imah24ef5mz63aya.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/z/g/t/53-5-107-firozi-polyester-3-2-1-82-35-82-60-20-82-xp-7s7p1cf-153-original-imahfjapgpmcnzuy.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/k/v/g/68-58-68-58-brown-cotton-blend-3-2-1-177-8-28-71-12-36-21-124-46-original-imah3r3yj5b6yu8n.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        }, {
            star: 4.4,
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/b/u/8/cream-cotton-blend-3-2-1-hd-ss-284-hdwood-natural-teak-finish-original-imah3yqjpe7hj9vc.jpeg?q=70",
            img2: "https://img.icons8.com/?size=100&id=tKTHzO8F7kZi&format=png&color=000000",
            text: "ست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعیست مبل چوبی 6 نفره چوبی جامد مبل کندالو ای طبیعی",
            text2: "2000.Reviews",
            li1: ". بدنه چوبی",
            li2: ". رنگ قهوه ایی",
            li3: ". قابل شست و شو",
            li4: ". 7 نفره",
            p1: "2,000,000.‌‌توما‌ن",
            p2: "3,300,000.تومان",
            p3: "60%off",
            p4: "تحویل‌رایگان",
            p5: "برای‌مقایسه‌اضافه‌کنید"
        },]
    return (<>
        <div dir="ltr" className="flex-col sm:grid grid-cols-12">
            {Main.map((ids) => (
                <MeinMap mins={ids} />
            ))}
        </div></>
    )
} export default ShoppingBasket