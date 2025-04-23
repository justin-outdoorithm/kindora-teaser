import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/kindora-logo.png" alt="Kindora" width={100} height={40} priority className="h-8 w-auto" />
    </Link>
  )
}
