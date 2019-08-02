export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      title: 'Project Title',
      name: 'project_title',
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
      name: 'main_project_image',
      title: 'Main project image',
      type: 'mainImage',
      description: 'Appears on the project page.'
    },
    {
      name: 'main_video',
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
      name: 'blog_title',
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
      name: 'main_blog_image',
      title: 'Main blog image',
      type: 'mainImage',
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
      title: 'blog_title',
      author: 'author.name',
      media: 'main_blog_image'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
