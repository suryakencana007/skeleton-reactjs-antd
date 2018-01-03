import environment from './environment';

export default Object.assign({}, environment, {
  CORS: true,
  SEO: {
    title: 'Agen Pinjam.co.id',
    description: 'Agen webapps for Pinjam.co.id',
    copyright: '© 2017 Gadai Pinjam Indonesia',
    head: {
      titleTemplate: '%s | Agen Pinjam.co.id',
      meta: [
        { name: 'description', content: 'Agen Website for Pinjam.co.id' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Agen Pinjam.co.id' },
        { property: 'og:image', content: 'https://pinjam.co.id/favicon.ico' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:title', content: 'Agen Pinjam.co.id' },
        { property: 'og:description', content: 'Website for Pinjam.co.id' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@pinjamindonesia' },
        { property: 'og:creator', content: 'Pinjam Dev' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' },
      ],
    },
  },
});
