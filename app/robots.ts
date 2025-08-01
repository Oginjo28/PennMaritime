import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/keystatic/"],
		},
		sitemap: "https://pennmaritime.club/sitemap.xml",
		host: "https://pennmaritime.club",
	};
}
