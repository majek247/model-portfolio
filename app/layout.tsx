import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {site,siteUrl} from '@/lib/site';
export const metadata:Metadata={title:{default:site.title,template:'%s | MUIZ'},description:site.description,...(siteUrl?{metadataBase:new URL(siteUrl)}:{}),openGraph:{title:site.title,description:site.description,type:'website',images:[{url:'/images/cat-portrait.png',width:1122,height:1402,alt:'Muiz with a black cat'}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}
