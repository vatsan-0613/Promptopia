import '@styles/globals.css'
import Nav from '@components/Nav'; 
import Provider from '@components/Provider'

export const metadata = {
    title : "Promptier", 
    description : 'Discover & share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
           <Provider>
            <div className=''>
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout