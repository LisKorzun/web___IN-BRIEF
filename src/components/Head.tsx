import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

const Head: FC = () => (
  <Helmet title="Web in brief" defer={false} htmlAttributes={{ lang: 'en' }}>
    {/*<link rel="prefetch" as="font" href="/fonts/Genos-Light.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
    {/*<link rel="prefetch" as="font" href="/fonts/Genos-Medium.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
    {/*<link rel="prefetch" as="font" href="/fonts/Genos-Black.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
    {/*<link rel="prefetch" as="font" href="/fonts/Poppins-Light.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
    {/*<link rel="preload" as="font" href="/fonts/Genos-Light.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
    {/*<link rel="preload" as="font" href="/fonts/Genos-Medium.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
    {/*<link rel="preload" as="font" href="/fonts/Genos-Black.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
    {/*<link rel="preload" as="font" href="/fonts/Poppins-Light.woff2" type="font/woff2" crossOrigin="anonymous" />*/}
  </Helmet>
)

export default Head
