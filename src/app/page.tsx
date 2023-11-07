import Image from 'next/image'
import ana_sayfa from "/public/ana_sayfa.jpg"



export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between p-24 w-full">
    <main>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div>
        <Image
          src={ana_sayfa}
          alt="Image 1"
          className=""
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

    </main>
  )
}
