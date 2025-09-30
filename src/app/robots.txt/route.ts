export async function GET() {
  const base = 'https://securityspace.es';
  const body = `User-agent: *
Allow: /
Disallow: /api/
Sitemap: ${base}/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
