import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
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
        image: fields.text({ label: 'Image URL' }),
        links: fields.object({
          github: fields.text({ label: 'GitHub Link' }),
          liveUrl: fields.text({ label: 'Live Website Link' }),
        }, { label: 'Links' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          images: true,
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
