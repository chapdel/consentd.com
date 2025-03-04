import Image from "next/image"

interface LogoProps {
  className?: string
}

export default function ConsentdLogo({ className = "" }: LogoProps) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-24_at_03.13.40_0815e961-removebg-preview%20%281%29-iYnN0GDcAZFmnrTNww3GZp6FvpPEEb.png"
      alt="Consentd Logo"
      width={180}
      height={40}
      className={className}
      priority
    />
  )
}

