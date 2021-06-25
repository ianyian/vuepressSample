module.exports = {
  /*base : '/../',*/
  base : '/testing1234/',

  logo: '/1891889.png',
  
  title: 'Hello VuePress',
    
  description: 'Just playing around',
    
  configureWebpack: {
    resolve: {
      alias: {
          '@alias': 'path/to/some/dir'
        }
      }
    },

    themeConfig: {
      logo: '1891889.png',
    },

    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ],
      sidebar: [
        {title: 'Factory Applications', path: '/factory-application/', children: ['/factory-application/','/factory-application/organization','/factory-application/software-products'] },
        {title: 'Application Security', path: '/application-security/',children: ['/application-security/','/application-security/certificate-requests/']},
        {title: 'Best Practices', path: '/best-practices/', children: ['/best-practices/','/best-practices/git/','/best-practices/markdown-guidelines/', '/best-practices/estimation/'] },
        {title: 'Human Resources', path: '/human-resources/', children: ['/human-resources/'] },
        {title: 'Developer Teams Web Sites', path: '/team-websites/', children: ['/team-websites/'] }
       ],
    }



  }