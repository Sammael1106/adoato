import 'src/globals.css'

export const metadata = {
  title: 'Ado Ato Interactive',
  description: 'Ado Ato Interactive, the non-profit wing of our award-winning studio, harnesses the power of technology to create and enact change. Inspired by real-world issues, we strive to channel the creativity of underrepresented creators. Our boundary-pushing projects span from entertainment to education, and center people of color, LGBTQ+ communities, and others whose voices urgently need to be heard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
