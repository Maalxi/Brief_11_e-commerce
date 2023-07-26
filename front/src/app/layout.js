import './globals.css'
import { Inter } from 'next/font/google'
import AppContextProvider from "./AppContext";
import { Toast } from './components/Toast/Toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "L'ÉpiCerise",
  description: 'E-commerce Brief 11',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AppContextProvider>
          {children}
          <Toast />
        </AppContextProvider>
      </body>
    </html>
  )
}
