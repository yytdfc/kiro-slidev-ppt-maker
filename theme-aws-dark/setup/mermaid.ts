import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'dark',
    themeVariables: {
      primaryColor: 'transparent',
      primaryTextColor: '#ffffff',
      primaryBorderColor: '#ffffff',
      lineColor: '#ffffff',
      secondaryColor: 'transparent',
      tertiaryColor: 'transparent',
      background: 'transparent',
      mainBkg: 'transparent',
      secondBkg: 'transparent',
      mainContrastColor: '#ffffff',
      darkMode: true,
      fontFamily: 'Amazon Ember, Helvetica Neue, Arial, sans-serif',
      fontSize: '16px',
      nodeBorder: '#ffffff',
      clusterBorder: 'rgba(255, 255, 255, 0.3)',
      edgeLabelBackground: 'rgba(20, 30, 44, 0.9)',
    },
    flowchart: {
      curve: 'linear',
      htmlLabels: true,
      useMaxWidth: true,
    },
    sequence: {
      actorMargin: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      mirrorActors: true,
      useMaxWidth: true,
    },
  }
})
