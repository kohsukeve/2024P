"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// export default function Page({ params }: { params: { slug: string } }) {
//   return (
//     <>
//       {/* <div>dashboard: {params.slug}</div> */}
//       <Link href={`/dashboard/${Number(params.slug) + 1}`}>
//         Go to next page
//       </Link>
//     </>
//   );
// }

/* SHOPのコンポーネント */
const City = ({ shop, name, hiragana, link }: any) => {
  return (
    <a href={link}>
      <div>
        <Image src={shop} width={180} height={160} alt="Picture of Character" />
        <div className="flex justify-center items-center h-10 bg-foo">
          {name}
        </div>
        <div className="flex justify-center items-center h-10 bg-foo">
          {hiragana}
        </div>
      </div>
    </a>
  );
};

const page = () => {
  const slideSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  };

  return (
    <>
      {/* トップヘッダースライド画像  */}
      <div>
        <Swiper
          // navigation
          // pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={slideSettings} // slidesPerViewを指定
          slidesPerView={"auto"} // ハイドレーションエラー対策
          centeredSlides={true} // スライドを中央に配置
          loop={true} // スライドをループさせる
          speed={6000} // スライドが切り替わる時の速度
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }} // スライド表示時間
          className="h-[512px] w-[1080px] rounded-lg"
        >
          <SwiperSlide>
            <Image
              src="/moll/00000.png"
              width={1080}
              height={512}
              alt="Picture of Character"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/moll/00001.png"
              width={1080}
              height={512}
              alt="Picture of Character"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/moll/00002.png"
              width={1080}
              height={512}
              alt="Picture of Character"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Concept */}
      <div className="mb-12">
        <div className="flex justify-center">
          <Image
            src="/moll/item6.png"
            width={180}
            height={130}
            alt="Picture of Character"
          />
        </div>
        <h3 className="flex justify-center mb-2">CONCEPT</h3>
        <p className="flex justify-center text-[12px] m-4">
          MOUSECafeは､「MOUSE」にゆかりのあるカナダモントリオールをテーマにした
          スピリチュアルでどこかファンクな遊び心溢れる普段使いの大人なカフェ｡
        </p>
        <p className="flex justify-center text-[12px] m-4">
          ケベック州テイストでフレンチカナディアン風。デザートはもちろん､バリエーション豊かなドリンクメニューも楽しめる｡
        </p>
        <p className="flex justify-center text-[12px] m-4">
          カフェにはグッズコーナーもあり、普段使いはもちろんギフトにもぴったりなオリジナルグッズを揃えています。
        </p>
        <p className="flex justify-center text-[12px] m-4">
          いつ､だれと訪れても､MOUSEの世界観を体感できる、MOUSECafeへボナペティ。
        </p>
      </div>

      {/* TOPIC&GOODS */}
      <div className="grid grid-cols-1">
        {/* Topic */}
        <div className="ml-[20%] w-[60%]">
          <div className="flex justify-between">
            <h3 className="text-sm mt-6">TOPICS</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image
                src="/moll/topic1.png"
                width={220}
                height={160}
                alt="Picture of Character"
              />
              <div className=" bg-gray-100 line-clamp-1 hover:line-clamp-none">
                【限定】シーズンフェア
                NATURE”をテーマにした、メニューやワークショップが登場
              </div>
            </div>
            <div>
              <Image
                src="/moll/topic2.png"
                width={220}
                height={130}
                alt="Picture of Character"
              />
              <div className=" bg-gray-100 line-clamp-1 hover:line-clamp-none">
                【期間】いまだけ ONLY FESS
              </div>
            </div>
            <div>
              <Image
                src="/moll/topic3.png"
                width={220}
                height={130}
                alt="Picture of Character"
              />
              <div className=" bg-gray-100 truncate">【季節】夏フェス</div>
            </div>
          </div>
        </div>

        {/* GOODS */}
        <div className="ml-[20%] w-[60%]">
          <div className="flex justify-between">
            <h3 className="text-sm mt-6">GOODS</h3>
            <a className="text-xl underline" href="/moll/goods">
              view all
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image
                src="/moll/chuko.png"
                width={220}
                height={160}
                alt="Picture of Character"
              />
              <div className=" bg-gray-100 truncate">CHUKO:価格400円</div>
            </div>
            <div>
              <Image
                src="/moll/chumi.png"
                width={220}
                height={130}
                alt="Picture of Character"
              />
              <div className=" bg-gray-100 truncate">CHUMI:価格800円 </div>
            </div>
            <div>
              <Image
                src="/moll/chuta1.png"
                width={220}
                height={130}
                alt="Picture of Character"
              />
              <div className=" bg-gray-100  truncate">CHUTA:2000円</div>
            </div>
          </div>
        </div>
      </div>

      {/* News */}
      <div className="flex justify-center mt-20 ">
        <Image
          src="/moll/chuta.png"
          width={120}
          height={120}
          alt="Picture of Character"
        />
        <div className="flex justify-center items-center text-xl">SHOP</div>
      </div>

      {/* お店の写真 */}
      <div className="ml-[20%] w-[60%] mt-20">
        <div className="grid grid-cols-4 gap-4">
          <City
            shop="/moll/shop1.png"
            name="YOKOHAMA"
            hiragana="横浜"
            link="/moll/shop/YOKOHAMA"
          />
          <City
            shop="/moll/shop2.png"
            name="KOBE"
            hiragana="神戸"
            link="/moll/shop/KOBE"
          />
          <City
            shop="/moll/shop3.png"
            name="SAPPORO"
            hiragana="札幌"
            link="/moll/shop/YOKOHAMA"
          />
          <City
            shop="/moll/shop4.png"
            name="AKIHABARA"
            hiragana="秋葉原"
            link="/moll/shop/KOBE"
          />
          <City
            shop="/moll/shop5.png"
            name="OKINAWA"
            hiragana="沖縄"
            link="/moll/shop/YOKOHAMA"
          />
          <City
            shop="/moll/shop6.png"
            name="NEWYORK"
            hiragana="ニューヨーク"
            link="/moll/shop/KOBE"
          />

          {/* 大阪、名古屋は作成途中の為省略せず */}
          <div>
            <Image
              src="/moll/item1.png"
              width={130}
              height={130}
              alt="Picture of Character"
            />
            <div className="flex justify-center items-center h-10 bg-foo">
              OSAKA
            </div>
            <div className="flex justify-center items-center h-10 bg-foo">
              大阪
            </div>
          </div>
          <div>
            <Image
              src="/moll/item1.png"
              width={180}
              height={130}
              alt="Picture of Character"
            />
            <div className="flex justify-center items-center h-10 bg-foo">
              NAGOYA
            </div>
            <div className="flex justify-center items-center h-10 bg-foo">
              名古屋
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL */}
      <div className="ml-[10%] w-[80%]">
        <div className="flex justify-center items-center mt-12 text-xl">
          SPECIAL
        </div>
        <div className="grid grid-cols-3 bg-foo my-2">
          <div>
            <div className="text-lg font-bold">BIRTHDAY PLAN</div>
            <div className="flex justify-center my-6">
              <Image
                src="/moll/birthday.png"
                width={180}
                height={160}
                alt="Picture of Character"
              />
            </div>
          </div>
          <div>
            <div className="text-lg font-bold">WORK SHOP</div>
            <div className="flex justify-center my-6">
              <Image
                src="/moll/workshop.png"
                width={180}
                height={160}
                alt="Picture of Character"
              />
            </div>
          </div>
          <div>
            <div className="text-lg font-bold">SPECIAL ROOM</div>
            <div className="flex justify-center my-6">
              <Image
                src="/moll/specialRoom.png"
                width={180}
                height={160}
                alt="Picture of Character"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
