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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lvdat/whydev-docs' }],
            plugins: [
                starlightLinksValidator(
                    {
                        errorOnInvalidHashes: false
                    }
                ),
                starlightSidebarTopics([
                    {
                        label: 'Minevui Network',
                        link: '/minevui-network/',
                        icon: 'open-book',
                        items: [
                            { label: 'Introduction', link: '/minevui-network/start' },
                        ],
                    },
                ]),
            ],
		}),
	],
    site: 'https://whydev.me',
});
