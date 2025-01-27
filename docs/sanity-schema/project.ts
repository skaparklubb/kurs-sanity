import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug - Ending of url to see the project work',
      description: 'This will be used to generate the URL for this project. It should be unique and descriptive.',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateAccomplished',
      title: 'When did you do this project?',
      type: 'date',
      validation: (rule) => rule.required(),
      options: {
        dateFormat: 'YYYY-MM',
      },
    }),
    defineField({
      name: 'content',
      title: 'Project Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],
})