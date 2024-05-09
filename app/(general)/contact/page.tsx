import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'SEO title', 
    description: 'SEO Description',
    keywords: ['ContactPage', 'Fernando', 'email']

}


export default function ContactPage(){

    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )

}