import { minify } from 'terser'

const fontsLoader = () => {
  const fontPoppins = new FontFace('Poppins', "url('/fonts/Poppins-Light.woff2') format('woff2')", {
    weight: '300',
    style: 'normal',
    display: 'swap',
  })
  const fontGenos300 = new FontFace('Genos', "url('/fonts/Genos-Light.woff2') format('woff2')", {
    weight: '300',
    style: 'normal',
    display: 'swap',
  })
  const fontGenos = new FontFace('Genos', "url('/fonts/Genos-Medium.woff2') format('woff2')", {
    weight: '400',
    style: 'normal',
    display: 'swap',
  })
  const fontGenos900 = new FontFace('Genos', "url('/fonts/Genos-Black.woff2') format('woff2')", {
    weight: '900',
    style: 'normal',
    display: 'swap',
  })
  Promise.all([fontPoppins.load(), fontGenos.load(), fontGenos900.load(), fontGenos300.load()]).then((loadedFonts) => {
    loadedFonts.forEach((font) => {
      // @ts-ignore
      document.fonts.add(font)
    })
  })
}

export const getFontLoaderScript = () => minify(`(${String(fontsLoader)})()`)
