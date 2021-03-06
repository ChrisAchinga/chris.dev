// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    pages: [
      {
        id: 1,
        name: 'Home Page',
        link: '/',
      },
      {
        id: 2,
        name: 'Blogs and Articles',
        link: '/blog',
      },
      {
        id: 3,
        name: 'Projects and GitHub',
        link: '/projects',
      },
      {
        id: 4,
        name: 'Resume',
        link: '/resume',
      },
      {
        id: 5,
        name: 'Sitemap',
        link: '/sitemap',
      },
      {
        id: 6,
        name: 'Message',
        link: '/message',
      },
    ],
  })
}
