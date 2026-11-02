import { productGroups, productBySlug } from './products'
import { solutions } from './solutions'

export const menus = [
  {
    label: 'Products',
    all: { label: 'All products', to: '/products' },
    wide: true,
    groups: productGroups.map((g) => ({
      name: g.name,
      links: g.slugs.map((s) => ({ label: productBySlug[s].name, to: `/products/${s}` }))
    }))
  },
  {
    label: 'Solutions',
    all: { label: 'All solutions', to: '/solutions' },
    wide: true,
    groups: [
      {
        name: 'By network',
        links: solutions.filter((s) => s.group === 'network').map((s) => ({ label: s.name, to: `/solutions/${s.slug}` }))
      },
      {
        name: 'By problem',
        links: solutions.filter((s) => s.group === 'topic').map((s) => ({ label: s.name, to: `/solutions/${s.slug}` }))
      }
    ]
  },
  {
    label: 'Services',
    groups: [
      {
        links: [
          { label: 'Professional services', to: '/services#professional' },
          { label: 'Managed services', to: '/services#managed' }
        ]
      }
    ]
  },
  {
    label: 'Resources',
    groups: [
      {
        links: [
          { label: 'DNS explained', to: '/resources/dns-explained' },
          { label: 'Case studies', to: '/resources#case-studies' },
          { label: 'White papers', to: '/resources#white-papers' },
          { label: 'Data sheets', to: '/resources#data-sheets' },
          { label: 'Videos', to: '/resources#videos' },
          { label: 'For partners', to: '/resources#partners' }
        ]
      }
    ]
  },
  {
    label: 'News',
    groups: [
      {
        links: [
          { label: 'Press releases', to: '/news' },
          { label: 'Blog', to: '/news/blog' },
          { label: 'Events', to: '/news/events' }
        ]
      }
    ]
  },
  {
    label: 'Company',
    groups: [
      {
        links: [
          { label: 'About Secure64', to: '/company' },
          { label: 'Leadership', to: '/company/leadership' },
          { label: 'Partners', to: '/company/partners' },
          { label: 'Support', to: '/company/support' },
          { label: 'Careers', to: '/company/careers' },
          { label: 'Contact', to: '/contact' }
        ]
      }
    ]
  }
]
