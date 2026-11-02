import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProductsView from './views/ProductsView.vue'
import ProductDetailView from './views/ProductDetailView.vue'
import SolutionsView from './views/SolutionsView.vue'
import SolutionDetailView from './views/SolutionDetailView.vue'
import ServicesView from './views/ServicesView.vue'
import ResourcesView from './views/ResourcesView.vue'
import DnsExplainedView from './views/DnsExplainedView.vue'
import NewsView from './views/NewsView.vue'
import AboutView from './views/AboutView.vue'
import LeadershipView from './views/LeadershipView.vue'
import PartnersView from './views/PartnersView.vue'
import SupportView from './views/SupportView.vue'
import CareersView from './views/CareersView.vue'
import ContactView from './views/ContactView.vue'
import TryView from './views/TryView.vue'
import UnderAttackView from './views/UnderAttackView.vue'
import LegalView from './views/LegalView.vue'
import NotFoundView from './views/NotFoundView.vue'
import { productBySlug } from './data/products'
import { solutionBySlug } from './data/solutions'

const notFound = (to) => ({ name: 'not-found', params: { pathMatch: to.path.slice(1).split('/') } })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/products', component: ProductsView, meta: { title: 'Products' } },
    {
      path: '/products/:slug',
      component: ProductDetailView,
      meta: { title: (to) => productBySlug[to.params.slug]?.name },
      beforeEnter: (to) => (productBySlug[to.params.slug] ? true : notFound(to))
    },
    { path: '/solutions', component: SolutionsView, meta: { title: 'Solutions' } },
    {
      path: '/solutions/:slug',
      component: SolutionDetailView,
      meta: { title: (to) => solutionBySlug[to.params.slug]?.name },
      beforeEnter: (to) => (solutionBySlug[to.params.slug] ? true : notFound(to))
    },
    { path: '/services', component: ServicesView, meta: { title: 'Services' } },
    { path: '/resources', component: ResourcesView, meta: { title: 'Resources' } },
    { path: '/resources/dns-explained', component: DnsExplainedView, meta: { title: 'DNS explained' } },
    { path: '/news', component: NewsView, meta: { title: 'Press releases', section: 'press' } },
    { path: '/news/blog', component: NewsView, meta: { title: 'Blog', section: 'blog' } },
    { path: '/news/events', component: NewsView, meta: { title: 'Events', section: 'events' } },
    { path: '/company', component: AboutView, meta: { title: 'About' } },
    { path: '/company/leadership', component: LeadershipView, meta: { title: 'Leadership' } },
    { path: '/company/partners', component: PartnersView, meta: { title: 'Partners' } },
    { path: '/company/support', component: SupportView, meta: { title: 'Support' } },
    { path: '/company/careers', component: CareersView, meta: { title: 'Careers' } },
    { path: '/contact', component: ContactView, meta: { title: 'Contact' } },
    { path: '/try', component: TryView, meta: { title: 'Try Secure64' } },
    { path: '/under-attack', component: UnderAttackView, meta: { title: 'Under attack?' } },
    { path: '/privacy', component: LegalView, meta: { title: 'Privacy policy', legal: 'privacy' } },
    { path: '/cookies', component: LegalView, meta: { title: 'Cookie policy', legal: 'cookies' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: 'Page not found' } }
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const t = to.meta.title
  const name = typeof t === 'function' ? t(to) : t
  document.title = name ? `${name} | Secure64` : 'Secure64'
})

export default router
