// https://github.com/michael-ciniawsky/postcss-load-config
const isProduction = process.env.NODE_ENV === 'production'

const plugins = {
  "postcss-import": {},
  "postcss-url": {
    url: 'inline'
  },
  "postcss-px-to-viewport": {
    viewportWidth: 1080, // 视窗的宽度，对应的是我们设计稿的宽度
    //viewportHeight: 1334, // 视窗的高度，一般指定1334，也可以不配置
    unitPrecision: 2, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
    selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    mediaQuery: false // 允许在媒体查询中转换`px`
  },
  "postcss-aspect-ratio": {}
}

if (isProduction) {
  plugins.cssnano = {
    "cssnano-preset-advanced": {
      zindex: false,
      autoprefixer: false
    }
  }
}

module.exports = {plugins}
