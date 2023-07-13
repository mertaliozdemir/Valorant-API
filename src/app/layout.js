import Header from "@/app/Header"
import Footer from "@/app/Footer"

export const metadata = {
    title: 'Valorant İnfo',
    description: 'valo',
}


export default async function AboutPage({children}) {

    return (
        <html lang={"en"}>
        <body>
            <Header/>
            <br/>
            <main>{children}</main>
            <Footer/>
        </body>
        </html>
    )
}
