import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import config from 'kao-config';


const seoImages = {
  openGraph: [
    'open-graph-blue.png',
    'open-graph-green.png',
    'open-graph-red.png',
    'open-graph-yellow.png',
  ],
  twitter: [
    'twitter-card-blue.png',
    'twitter-card-green.png',
    'twitter-card-red.png',
    'twitter-card-yellow.png',
  ],
  google: [
    'google-blue.png',
    'google-green.png',
    'google-red.png',
    'google-yellow.png',
  ],
};

const seoImageURL = file => `https://s3.amazonaws.com/tmc-site-assets/graphics/${file}`;
const seoURL = path => path;

const getMetaTags = ({
  title, description, url, contentType, published, updated, category, tags
}) => {
  const metaTags = [
    { itemprop: 'name', content: title || config.SEO.title },
    { itemprop: 'description', content: description || config.SEO.description },
    { itemprop: 'image', content: seoImageURL(_.sample(seoImages.google)) },

    { name: 'description', content: description || config.SEO.description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: config.SEO.twitter },
    { name: 'twitter:title', content: title || config.SEO.title },
    { name: 'twitter:description', content: description || config.SEO.description },
    { name: 'twitter:creator', content: config.SEO.twitter },
    { name: 'twitter:image:src', content: seoImageURL(_.sample(seoImages.twitter)) },

    { name: 'og:title', content: title || config.SEO.title },
    { name: 'og:type', content: contentType },
    { name: 'og:url', content: url },
    { name: 'og:image', content: seoImageURL(_.sample(seoImages.openGraph)) },
    { name: 'og:locale', content: 'id_ID' },
    { name: 'og:description', content: description || config.SEO.description },
    { name: 'og:site_name', content: config.SEO.title },
    { name: 'fb:app_id', content: '<FB App ID>' },
  ];

  if (published) metaTags.push({ name: 'article:published_time', content: published });
  if (updated) metaTags.push({ name: 'article:modified_time', content: updated });
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });

  return metaTags;
};

export const SEO = ({
  schema, title, description, path, contentType, published, updated, category, tags,
}) => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`,
    }}
    titleTemplate={config.SEO.titleTemplate}
    defaultTitle={config.SEO.title}
    title={ title }
    link={[
      { rel: 'canonical', href: seoURL(path) },
    ]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      url: seoURL(path),
      published,
      updated,
      category,
      tags,
    })}
  />
);

SEO.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  contentType: PropTypes.string,
  published: PropTypes.string,
  updated: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.array,
  twitter: PropTypes.string,
};
