import { UserProvider } from "../../node_modules/@auth0/nextjs-auth0/dist/index"



function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
