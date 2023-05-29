import './globals.css'
import { Open_Sans} from 'next/font/google'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Blog AI App",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
        
 
      <body className={openSans.className}>
      <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
     
    </html>
  )
}
