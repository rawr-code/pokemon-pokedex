import type { Metadata } from 'next'
import { Saira_Semi_Condensed } from 'next/font/google'
import './globals.css'

// React Query
import Providers from './providers'

// Styled components
import StyledComponentsRegistry from '@/utils/registry'
import GlobalStyles from '@/styles/GlobalStyles'

// Atoms
import { Pokedex } from '@atoms'

const sairaSemiCondensed = Saira_Semi_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sairaSemiCondensed',
})

export const metadata: Metadata = {
  title: 'Pokedex App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={sairaSemiCondensed.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Providers>
            <Pokedex>{children}</Pokedex>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
