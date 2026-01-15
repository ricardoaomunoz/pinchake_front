<template>
  <section id="kitchen-sink">
    <v-row no-gutters>
      <v-col cols="12">
        <Callout
          v-for="({name, section}, i) in sections"
          :key="i"
          :section="name"
        >
          <KeepAlive>
            <component :is="section" />
          </KeepAlive>
        </Callout>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
  import Callout from './Callout.vue'
  import HeroAlt from '@/components/sections/SectionHeroAlt.vue'
  import ArticlePage from '@/components/sections/SectionArticle.vue'
  import AboutOurProduct from '@/components/sections/SectionAboutOurProduct.vue'
  import Affiliates from '@/components/sections/SectionAffiliates.vue'
  import ContactUs from '@/components/sections/SectionContactUs.vue'
  import CustomerReviews from '@/components/sections/SectionCustomerReviews.vue'
  import Features from '@/components/sections/SectionFeatures.vue'
  import Gallery from '@/components/sections/SectionGallery.vue'
  import Hero from '@/components/sections/SectionHero.vue'
  import Info from '@/components/sections/SectionInfo.vue'
  import InfoAlt from '@/components/sections/SectionInfoAlt.vue'
  import InfoGraph from '@/components/sections/SectionInfoGraph.vue'
  import KeepInTouch from '@/components/sections/SectionKeepInTouch.vue'
  import MapPage from '@/components/sections/SectionMap.vue'
  import Marketing from '@/components/sections/SectionMarketing.vue'
  import Mobile from '@/components/sections/SectionMobile.vue'
  import News from '@/components/sections/SectionNews.vue'
  import NewsAlt from '@/components/sections/SectionNewsAlt.vue'
  import Newsletter from '@/components/sections/SectionNewsletter.vue'
  import NewsletterAlt from '@/components/sections/SectionNewsletterAlt.vue'
  import PricingPlan from '@/components/sections/SectionPricingPlan.vue'
  import Project from '@/components/sections/SectionProject.vue'
  import Projects from '@/components/sections/SectionProjects.vue'
  import RecentWorks from '@/components/sections/SectionRecentWorks.vue'
  import RelatedProjects from '@/components/sections/SectionRelatedProjects.vue'
  import SocialMedia from '@/components/sections/SectionSocialMedia.vue'
  import ThemeFeatures from '@/components/sections/SectionThemeFeatures.vue'
  import WeHelpYourSuccess from '@/components/sections/SectionWeHelpYourSuccess.vue'
  import NotFoundPage from '@/components/sections/Section404.vue'

  const sections = shallowRef([
    { name: 'HeroAlt', section: HeroAlt },
    { name: 'ArticlePage', section: ArticlePage },
    { name: 'AboutOurProduct', section: AboutOurProduct },
    { name: 'Affiliates', section: Affiliates },
    { name: 'ContactUs', section: ContactUs },
    { name: 'CustomerReviews', section: CustomerReviews },
    { name: 'Features', section: Features },
    { name: 'Gallery', section: Gallery },
    { name: 'Hero', section: Hero },
    { name: 'Info', section: Info },
    { name: 'InfoAlt', section: InfoAlt },
    { name: 'InfoGraph', section: InfoGraph },
    { name: 'KeepInTouch', section: KeepInTouch },
    { name: 'MapPage', section: MapPage },
    { name: 'Marketing', section: Marketing },
    { name: 'Mobile', section: Mobile },
    { name: 'News', section: News },
    { name: 'NewsAlt', section: NewsAlt },
    { name: 'Newsletter', section: Newsletter },
    { name: 'NewsletterAlt', section: NewsletterAlt },
    { name: 'PricingPlan', section: PricingPlan },
    { name: 'Project', section: Project },
    { name: 'Projects', section: Projects },
    { name: 'RecentWorks', section: RecentWorks },
    { name: 'RelatedProjects', section: RelatedProjects },
    { name: 'SocialMedia', section: SocialMedia },
    { name: 'ThemeFeatures', section: ThemeFeatures },
    { name: 'WeHelpYourSuccess', section: WeHelpYourSuccess },
    { name: '404', section: NotFoundPage },
  ])
</script>
