export const siteConfig: SiteConfig = {
    title: "Hi! Floks!",
    language: "zh",
    description: "Sunil Kumars personal blog..",
    keywords: "sunil, blog, personal blog",
    author: "Sunil Kumar",
    avatar: "/sunny.png",
    favicon: "/favicon.ico",
    site: "https://sunil-blog.netlify.app/",

    page_size: 10,
}

export const navBarConfig: NavBarConfig = {
    links: [
        {
            name: 'Projects',
            url: '/projects'
        },
        {
            name: 'Links',
            url: '/links'
        },
        {
            name: 'About',
            url: '/about'
        }
    ]
}

export const socialLinks: SocialLink[] = [
    // https://icon-sets.iconify.design/material-symbols/
    {
        label: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/sunilkumar4545'
    },
    {
        label: 'Email',
        icon: 'material-symbols:mail-rounded',
        url: 'mailto:sunilkumarsodisetty4545@gmail.com'
    }
]

interface SiteConfig {
    title: string
    language: string
    description: string
    keywords: string
    author: string
    avatar: string
    favicon: string
    site: string

    page_size: number
    twikoo_uri?: string     // https://twikoo.js.org/
}

interface NavBarConfig {
    links: {
        name: string
        url: string
        target?: string
    }[]
}

interface SocialLink {
    label: string
    icon: string
    url: string
}
