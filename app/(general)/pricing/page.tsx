import { Metadata } from "next"


export const metadata: Metadata = {

    title: 'SEO, Tilte',
    description: 'SEO Description', 
    keywords: ['PrincingPage', 'Precios']
}

export default function PricingPage(){

    return (
        <>
            <span className="text-7xl">Princing Page</span>
        </>
    )
}