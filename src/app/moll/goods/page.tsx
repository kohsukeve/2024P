"use client";

import Image from "next/image";
import {
  useState as UseState,
  useRef as UseRef,
  useEffect as UseEffect,
} from "react";

interface DataType {
  key: string;
  id: number;
  name: string;
  payment: number;
}

const page = () => {
  const [dataSource, setDataSource] = UseState<DataType[]>([]);

  const isFetchedRef = UseRef(false);

  UseEffect(() => {
    const fetchNotes = async () => {
      if (isFetchedRef.current) {
        return;
      }
      isFetchedRef.current = true;
      const response = await fetch("/api/payment");
      const payment = await response.json();
      setDataSource(payment);
    };
    fetchNotes();
  }, []);

  console.log(dataSource);
  return (
    <>
      <div className="bg-foo">
        <div className="flex justify-center">
          <h2>NEWS</h2>
        </div>
        <div className="flex justify-center text-2xl font-bold">GOODS</div>
      </div>

      <div className="mt-20">
        {/* 料理の写真 */}
        <div className="grid grid-cols-3 gap-4">
          {dataSource.map((pay) => (
            <div key={pay.id}>
              <div>
                <Image
                  src="/moll/news.png"
                  width={180}
                  height={160}
                  alt="Picture of Character"
                />
                <div className="flex justify-center items-center h-10 bg-foo">
                  {pay.name}￥{pay.payment}（税込）
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*         <div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image
                src="/moll/news.png"
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
                src="/moll/news.png"
                width={180}
                height={160}
                alt="Picture of Character"
              />
              <div className="flex justify-center items-center h-10 bg-foo">
                ミートボール with トマトソースパスタ￥1,628（税込）
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default page;
