export default {
  name: 'post',
  title: 'Project',
  type: 'document',
  fields: [
    {
      title: 'Project Title',
      name: 'projectTitle',
      description: 'The title the will appear on the project page.',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This will be the URL for the blog post.',
      options: {
        source: 'blog_title',
        maxLength: 96
      }
    },
    {
      name: 'mainProjectImage',
      title: 'Main project image',
      type: 'image',
      description: 'Appears on the project page.'
    },
    {
      name: 'mainVideo',
      title: 'Main video',
      type: 'url'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      title: 'Blog Title',
      name: 'blogTitle',
      description: 'The title the will appear on the blog post.',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'This won\'t be displayed, but will be useful for sorting posts.'
    },
    {
      name: 'mainBlogImage',
      title: 'Main blog image',
      type: 'image',
      description: 'Appears at the top of the post.'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'projectTitle',
      author: 'author.name',
      media: 'mainProjectImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
