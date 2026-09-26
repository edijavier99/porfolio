export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://edijavier.com/sitemap.xml',
    host: 'https://edijavier.com',
  };
}
