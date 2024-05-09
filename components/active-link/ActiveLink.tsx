'use client'


import Link from 'next/link';
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text?: string;
}

const ActiveLink = ({path, text}: Props) => {

  //Hooks que retorna la ubicacion path de la pagina
  const pathName = usePathname();
  console.log(pathName)


  return (
    <Link 
        key={path} 
        className={`${style.link} ${ (pathName === path) && style['active-link']}`} 
        href={path}>
            {text}
    </Link>
  )
}

export default ActiveLink