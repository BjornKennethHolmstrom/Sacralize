<!-- src/routes/toolkit/+layout.svelte -->
<script lang="ts">
  import SectionLayout from '$lib/components/SectionLayout.svelte';
  import { t } from 'svelte-i18n';

  const sections = [
    {
      title: $t('toolkit.basics_title'),
      path: '/toolkit/basics',
      subsections: [
        { title: $t('toolkit.definitions'), path: '/toolkit/basics/what-is-sacred-geometry' },
        { title: $t('toolkit.history'), path: '/toolkit/basics/history' },
        { title: $t('toolkit.examples'), path: '/toolkit/basics/famous-examples' }
      ]
    },
    {
      title: $t('toolkit.tools_title'),
      path: '/toolkit/tools',
      subsections: [
        { title: $t('toolkit.flower_of_life'), path: '/toolkit/tools/flower-of-life' },
        { title: $t('toolkit.fibonacci_spiral'), path: '/toolkit/tools/fibonacci-spiral' },
        { title: $t('toolkit.custom_shapes'), path: '/toolkit/tools/custom-shapes' },
        { title: $t('toolkit.sacred_geometry'), path: '/toolkit/tools/sacred-geometry' }
      ]
    },
    {
      title: $t('toolkit.resources_title'),
      path: '/toolkit/resources'
    }
  ];
</script>

<SectionLayout title={$t('toolkit.title')} {sections}>
  <slot />
</SectionLayout>
