<!-- src/routes/guides/+layout.svelte -->
<script lang="ts">
  import SectionLayout from '$lib/components/SectionLayout.svelte';
  import { t } from 'svelte-i18n';

  const sections = [
    {
      title: $t('guides.beginners_title'),
      path: '/guides/beginners',
      subsections: [
        { title: $t('guides.understanding_patterns'), path: '/guides/beginners/understanding-patterns' },
        { title: $t('guides.visual_tutorials'), path: '/guides/beginners/visual-tutorials' },
        { title: $t('guides.interactive_quizzes'), path: '/guides/beginners/interactive-quizzes' }
      ]
    },
    {
      title: $t('guides.advanced_title'),
      path: '/guides/advanced',
      subsections: [
        { title: $t('guides.using_in_art'), path: '/guides/advanced/art-applications' },
        { title: $t('guides.urban_design'), path: '/guides/advanced/architecture' },
        { title: $t('guides.philosophical_connections'), path: '/guides/advanced/philosophy' }
      ]
    }
  ];
</script>

<SectionLayout title={$t('guides.title')} {sections}>
  <slot />
</SectionLayout>
