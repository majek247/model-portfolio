import Image from 'next/image';
import type { Photo as PhotoType } from '@/lib/portfolio';
export default function Photo({photo,priority=false,className=''}:{photo:PhotoType;priority?:boolean;className?:string}) {
  if(photo.crop){
    const [x,y,w,h]=photo.crop;
    return <span role="img" aria-label={photo.alt} className={`photo photo-crop ${className}`} style={{backgroundImage:`url(${photo.src})`,backgroundSize:`${684/w*100}% ${2048/h*100}%`,backgroundPosition:`${x/(684-w)*100}% ${y/(2048-h)*100}%`}}/>;
  }
  return <span className={`photo ${className}`}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 65vw" priority={priority} quality={90}/></span>;
}
