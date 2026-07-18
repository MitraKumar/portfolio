import { config, fields, collection } from '@keystatic/core';
import React from 'react';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Mitra Portfolio',
      mark: () => (
        <span style={{ 
          fontFamily: 'cursive', 
          fontWeight: '900', 
          fontSize: '1.45rem', 
          background: 'linear-gradient(90deg, #FF5A36 0%, #00F2FE 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.05em'
        }}>
          Mitra.
        </span>
      ),
    },
    navigation: {
      'Content Management': ['projects', 'blogs'],
    },
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/data/projects/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        id: fields.number({ label: 'ID / Order (Numeric)' }),
        subTitle: fields.text({ label: 'Subtitle' }),
        description: fields.text({ label: 'Description', multiline: true }),
        tech: fields.array(fields.text({ label: 'Tech Tag' }), {
          label: 'Tech Stack',
          itemLabel: (props) => props.value || 'Tag',
        }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'public/assets/projects',
          publicPath: '/assets/projects',
        }),
        links: fields.object({
          github: fields.text({ label: 'GitHub Link' }),
          liveUrl: fields.text({ label: 'Live Website Link' }),
        }, { label: 'Links' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          images: {
            directory: 'public/assets/content',
            publicPath: '/assets/content',
          },
        }),
      },
    }),
    blogs: collection({
      label: 'Blogs',
      slugField: 'id',
      path: 'src/data/blogs/*',
      format: { data: 'json' },
      schema: {
        id: fields.text({ label: 'ID / Order (e.g. 1)' }),
        description: fields.text({ label: 'Description' }),
        url: fields.text({ label: 'Article URL' }),
      },
    }),
  },
});
