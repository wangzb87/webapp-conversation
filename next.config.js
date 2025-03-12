// next.config.mjs（ESM 模式）
import createMDX from '@next/mdx'

const withMDX = createMDX({
  // 支持 .md 和 .mdx 扩展名
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [], // 可选插件（如 remark-gfm）
    rehypePlugins: [], // 可选插件（如 rehype-highlight）
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})