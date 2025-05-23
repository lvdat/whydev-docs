// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
    image: {
        service: passthroughImageService(),
    },
	integrations: [
		starlight({
			title: 'whydev',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lvdat/whydev-docs' },
                { icon: 'discord', label: 'Discord', href: 'https://dsc.gg/minevui' },
            ],
            plugins: [
                starlightLinksValidator(
                    {
                        errorOnInvalidHashes: false
                    }
                ),
                starlightSidebarTopics([
                    {
                        id: 'minevui-network',
                        label: 'Minevui Network',
                        link: '/minevui-network/',
                        icon: 'open-book',
                        items: [
                            { label: 'Giới thiệu', link: '/minevui-network/gioi-thieu' },
                        ],
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
                                    'minevui-modpack/cai-dat/thu-cong'
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Lam server Minecraft',
                        link: '/lam-server-minecraft/',
                        icon: 'open-book',
                        items: [
                            { label: 'Introduction', link: '/lam-server-minecraft/start' },
                        ]
                    }
                ]),
            ],
		}),
	],
    site: 'https://whydev.me',
});
