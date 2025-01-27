import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'Om meg',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero tittel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubTitle',
      title: 'Hero undertittel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    
    defineField({
      name: 'image',
      title: 'Portrett',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),    
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    
  ],
})