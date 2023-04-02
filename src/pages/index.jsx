import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { MainLayout,Card } from '@/components' 
import Slider from '@/components/slider/slider'
import { CotegorSlide } from '@/components'
const arr = [1,2,3,1,2,3,2,1,2]
export default function Home() {
  return (
<MainLayout>
  <Slider/>
  <CotegorSlide/>
  
</MainLayout>
  )
}
