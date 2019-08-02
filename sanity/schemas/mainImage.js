export default {
    name: 'mainImage',
    title: 'Main image',
    type: 'image',
    fields: [
        {
            name: 'attribution',
            type: 'string',
            title: 'Attribution'
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            description: 'Always add this. It will be used for the image alt text.'
        }
    ],
    options: {
        hotspot: true
    }
}