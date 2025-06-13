// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightLinksValidator from 'starlight-links-validator'
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  integrations: [
    starlight({
      title: 'whydev',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/lvdat/whydev-docs'
        },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/minevui' }
      ],
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/lvdat/whydev-docs/edit/master'
      },
      customCss: [
        '@fontsource/roboto/vietnamese-400.css',
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/600.css',
        './src/styles/main.css'
      ],
      components: {
        Footer: "./src/components/overrides/Footer.astro"
      },
      plugins: [
        starlightLinksValidator({
          errorOnInvalidHashes: false
        }),
        starlightSidebarTopics([
          {
            id: 'minevui-network',
            label: 'Minevui Network',
            link: '/minevui-network/',
            icon: 'open-book',
            items: [
              {
                label: 'Thông tin chung',
                items: [
                  'minevui-network/thong-tin-chung',
                  'minevui-network/thong-tin-chung/donate'
                ]
              },
              {
                label: 'Wiki',
                items: [
                  'minevui-network/wiki',
                  'minevui-network/wiki/dang-ky-dang-nhap',
                  {
                    label: 'Chế độ sinh tồn',
                    items: [
                      {
                        label: 'Tổng quan',
                        link: '/minevui-network/wiki/sinh-ton/'
                      },
                      'minevui-network/wiki/sinh-ton/vu-khi-dac-biet',
                      'minevui-network/wiki/sinh-ton/auction-house',
                      'minevui-network/wiki/sinh-ton/enchantments',
                      'minevui-network/wiki/sinh-ton/levelled-mobs',
                      'minevui-network/wiki/sinh-ton/rtp',
                      'minevui-network/wiki/sinh-ton/skills',
                      'minevui-network/wiki/sinh-ton/shop',
                      'minevui-network/wiki/sinh-ton/death-chest',
                      'minevui-network/wiki/sinh-ton/trade',
                      'minevui-network/wiki/sinh-ton/home',
                      'minevui-network/wiki/sinh-ton/team',
                      'minevui-network/wiki/sinh-ton/kit',
                      'minevui-network/wiki/sinh-ton/claim',
                      'minevui-network/wiki/sinh-ton/casino',
                      'minevui-network/wiki/sinh-ton/misc'
                      
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'minevui-modpack',
            label: 'Minevui Modpack',
            link: '/minevui-modpack/',
            icon: 'pencil',
            items: [
              {
                label: 'Giới thiệu',
                link: '/minevui-modpack/gioi-thieu'
              },
              {
                label: 'Cài đặt',
                items: [
                  'minevui-modpack/cai-dat',
                  'minevui-modpack/cai-dat/modrinth',
                  'minevui-modpack/cai-dat/multimc',
                  'minevui-modpack/cai-dat/tlauncher',
                  'minevui-modpack/cai-dat/thu-cong'
                ]
              }
            ]
          },
          {
            label: 'Lam server Minecraft',
            link: '/lam-server-minecraft/',
            icon: 'open-book',
            items: [
              { label: 'Introduction', link: '/lam-server-minecraft/start' }
            ]
          }
        ])
      ]
    })
  ],
  site: 'https://whydev.me'
})
