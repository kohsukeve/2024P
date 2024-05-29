"use client";

import Image from "next/image";
import { useParams as UseParams } from "next/navigation";

const concepts = [
  { YOKOHAMA: "海風を感じながらくつろげる、横浜港の見える一軒家カフェ" },
  { KOBE: "海と神戸の街並みを一望できる、開放的なテラス席が自慢のカフェ" },
  { SAPPORO: "小樽運河沿いに建つ、運河の景色を眺めながらくつろげるカフェ" },
  { AKIHABARA: "神田川沿いに建つ、川の流れを眺めながらくつろげるカフェ。" },
  { OKINAWA: "恩納村の海沿いに建つ、美しい海を眺めながらくつろげるカフェ。" },
  {
    NEWYORK:
      "ブルックリンのイースト川沿いに建つ、マンハッタンの景色を眺めながらくつろげるカフェ。",
  },
];

const page = (slug: any) => {
  const params = UseParams();

  const letter: any = params.slug;

  const renderItem = (item: any) => {
    if (item?.[letter]?.charAt) {
      return <span key={item[letter]}>{item[letter]}</span>;
    }
  };

  return (
    <>
      <div className="bg-foo">
        <div className="flex justify-center">
          <h2>SHOP</h2>
        </div>
        <div className="flex justify-center text-2xl font-bold">
          {params.slug}
        </div>
      </div>
      <div>
        <Image
          src="/moll/00000.png"
          width={1080}
          height={512}
          alt="Picture of Character"
        />
      </div>
      {/* CONCEPT */}
      <div className="m-20">
        <h3 className="flex justify-center mt-20 font-semibold text-2xl">
          CONCEPT
        </h3>
        <div>
          <p className="flex m-2 justify-center font-bold">
            {concepts.map(renderItem)}
          </p>
          <p className="flex m-2 justify-center">
            開放的なテラス席と、港の見える店内
          </p>
          <p className="flex m-2 justify-center">
            アンティーク家具に囲まれた、隠れ家のような空間
          </p>
          <p className="flex m-2 justify-center">
            少人数での集まりにぴったりな個室もあり、プライベートな空間でゆっくりと過ごすことができます。
          </p>
        </div>

        {/* 今後apiでの取得も考える */}
      </div>

      {/* MENU */}
      <div className="m-20">
        <h3 className="flex justify-center mt-20 font-semibold text-3xl">
          MENU
        </h3>
        {/* 料理の写真 */}
        <div className="mt-20">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image
                src="/moll/item6.png"
                width={180}
                height={160}
                alt="Picture of Character"
              />
              <div className="flex justify-center items-center h-10 bg-foo">
                ミートボール with トマトソースパスタ￥1,628（税込）
              </div>
            </div>
            <div>
              <Image
                src="/moll/item6.png"
                width={180}
                height={160}
                alt="Picture of Character"
              />
              <div className="flex justify-center items-center h-10 bg-foo">
                ミートボール with トマトソースパスタ￥1,628（税込）
              </div>
            </div>
            <div>
              <Image
                src="/moll/item6.png"
                width={180}
                height={160}
                alt="Picture of Character"
              />
              <div className="flex justify-center items-center h-10 bg-foo">
                ミートボール with トマトソースパスタ￥1,628（税込）
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHOP INFO */}
      <div className="m-20 border border-gray-900">
        <h3 className="flex justify-center mt-10 font-semibold text-2xl">
          SHOP INFORMATION
        </h3>
        <div>
          <p className="flex m-2 justify-center">
            〒123-0000 横浜市川崎区中野区2-4-6
          </p>
          <p className="flex m-2 justify-center">
            月～金・日・祝 OPEN/10:00 - CLOSE/20:00（L.O. 19:00）
          </p>
          <p className="flex m-2 justify-center">TEL/ 01-2345-6789</p>
          <p className="flex m-2 mb-6 justify-center">
            URL/ www.xxx.jp MAIL/ yokohama@mausecafe.jp
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
