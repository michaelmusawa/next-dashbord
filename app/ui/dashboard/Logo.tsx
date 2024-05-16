import Image from "next/image"



const Logo = () => {
  return (
    <div className="logo-wrapper">
        <Image
            src="/images/logo.png"
            width={70}
            height={100}
            alt="logo of the site"
            />
    </div>
  )
}

export default Logo