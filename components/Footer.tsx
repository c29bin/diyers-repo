import Image from 'next/image'
import React from 'react'

import { footerLinks } from '@constant'


const Footer = () => {

  type ColumnProps = {
    title: string,
    links:Array<string>
  }

 const FooterColumn = ({title,links}: ColumnProps) => {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <ul>
        {links.map((link,index)=>(
          <h3>{link}</h3>
        ))}
      </ul>
    </div>
  )
 }
  return (
    <footer className="footer">
      <Image 
      src="/diyers.svg"
      width={95}
      height={30}
      alt='diyers'
      />
      <p className="flex-shrink-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut fugit nihil corrupti cum earum sint tempora rem! Corrupti, repellendus distinctio quis facilis voluptas libero impedit cumque esse, eaque quod sequi.</p>
      <div className="flex flex-wrap gap-12">
        <div className="flex flex-1 flex-col">
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
        </div>
        <div className="flex flex-1 flex-col">
          <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
          <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
        </div>
        <div className="flex flex-1 flex-col">
          <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
          <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
        </div>
        <div className="flex flex-1 flex-col">
          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
