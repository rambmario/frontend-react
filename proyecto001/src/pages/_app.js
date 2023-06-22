import "bootstrap/dist/css/bootstrap.min.css"; 
import '@/styles/globals.css'
import { appFirebase } from '@/firebase/InitConfig'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
