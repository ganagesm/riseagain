// pages/sitemap.xml.js

import fs from 'fs/promises';
import path from 'path';

const Sitemap = ({ pages }) => {
  const createSitemap = (pages) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const urls = pages.map((page) => {
      return `<url><loc>${baseUrl}/${page}</loc></url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join('')}
      </urlset>`;
  };

  return <>{createSitemap(pages)}</>;
};

export async function getServerSideProps() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const excludedPages = ['checkout', 'blog2','coming-soon','case-studies','blog-details','_document','privacy-policy','services','terms-conditions','customers-and-partners','index','cart','_app','case-studies-details','partner' ];
  const pages = await getPages(pagesDirectory, excludedPages);

  return {
    props: {
      pages,
    },
  };
}

async function getPages(directory, excludedPages) {
  const files = await fs.readdir(directory);
  const allowedPages = files
    .filter((file) => file.endsWith('.js') && !excludedPages.includes(file.replace(/\.js$/, '')))
    .map((file) => file.replace(/\.js$/, ''));

  return allowedPages;
}

export default Sitemap;
