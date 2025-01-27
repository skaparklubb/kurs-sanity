import {defineField, defineType} from 'sanity';

export const experience = defineType({
    name: 'experience',
    title: 'Erfaring',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tittel',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'company',
            title: 'Selskap',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'startDate',
            title: 'Startdato',
            type: 'date',
            validation: (rule) => rule.required(),
            options: {
                dateFormat: 'YYYY-MM'
            }
        }),
        defineField({
            name: 'endDate',
            title: 'Sluttdato',
            type: 'date',            
            options: {
                dateFormat: 'YYYY-MM'
            }
        }),
    ]
})