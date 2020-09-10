module.exports = {
	name: "axlhazarika.in", // optional, falls back to object key
	description: "Axl’s Personal web site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.axlhazarika.in/",
		"https://www.axlhazarika.in/journal/",
		"https://www.axlhazarika.in/poems/",
		// Popular Posts
		"https://www.axlhazarika.in/journal/say-hello-to-gridsome/",
		"https://www.axlhazarika.in/journal/celebrating-the-birthday-of-bhupen-hazarika/",
	]
};