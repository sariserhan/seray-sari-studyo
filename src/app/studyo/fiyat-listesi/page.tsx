import Image from 'next/image'
import fiyat_listesi from "/public/fiyat_listesi.jpg"
import kalici_makyaj from "/public/kalici_makyaj.jpg"
import cilt_bakimi from "/public/cilt_bakimi.jpg"
import bolgesel_incelme from "/public/bolgesel_incelme.jpg"
import medical from "/public/medical.jpg"

const page = () => {
    return (
        <div className="">{/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
            <Image
                src={fiyat_listesi}
                alt="Image 1"
                className=""
                style={{ width: '100%', height: 'auto' }}
            />
            <Image
                src={kalici_makyaj}
                alt="Image 2"
                className=""
                style={{ width: '100%', height: 'auto' }}
            />
            <Image
                src={cilt_bakimi}
                alt="Image 3"
                className=""
                style={{ width: '100%', height: 'auto' }}
            />
            <Image
                src={bolgesel_incelme}
                alt="Image 4"
                className=""
                style={{ width: '100%', height: 'auto' }}
            />
            <Image
                src={medical}
                alt="Image 5"
                className=""
                style={{ width: '100%', height: 'auto' }}
            />
        </div>

    )
}

export default page
