import React from 'react'
import Image from 'next/image'
import '@/app/test/style.css'
import { unstable_noStore } from 'next/cache'
async function fetchRandomCat (): Promise<string> {
//   unstable_noStore() // this will prevent the response from being cached
  console.time('--fetching')
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  console.timeEnd('--fetching')
  const image = await res.json()
  console.log(image[0].url)
  return image[0].url
}
export default async function (): Promise<JSX.Element> {
  const image = await fetchRandomCat()
  return (
        <div id="wrapper">
            <Image src={image} alt="cat" width={500} height={500}/>
        </div>
  )
}
