import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/',
        },
        sitemap: `${process.env.SITE_NAME}/sitemap.xml`,
    }
}