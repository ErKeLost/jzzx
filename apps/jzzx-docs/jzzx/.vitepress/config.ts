const getBase = require('../../src/vitepress/config/baseConfig')
const path = require('path')
import { head } from './config/head'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { headerPlugin } from './headerMdPlugin'
module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,
    // markdown: {
    //   config(md) {
    //     md.use(headerPlugin)
    //   }
    // },
    vite: {
      base: './',
      define: {
        __VUE_OPTIONS_API__: false
      },
      optimizeDeps: {
        include: ['gsap', 'dynamics.js']
      },
      server: {
        host: true,
        fs: {
          // for when developing with locally linked theme
          allow: ['../..']
        }
      },
      build: {
        minify: 'terser',
        chunkSizeWarningLimit: Infinity,
        rollupOptions: {
          output: {
            chunkFileNames: 'assets/chunks/[name].[hash].js',
            manualChunks(id, ctx) {
              if (id.includes('gsap')) {
                return 'gsap'
              }
              if (id.includes('dynamics.js')) {
                return 'dynamics'
              }
              return moveToVendor(id, ctx)
            }
          }
        }
      },
      json: {
        stringify: true
      }
    },

    // vue: {
    //   reactivityTransform: true
    // },

    lang: 'zh-CN',
    title: 'Value Online',
    description: 'Value Online - The Value Online Front end architecture',
    head,
    themeConfig: {
      // logo: '/img/logo-vue.svg',
      nav,
      sidebar,
      algolia: {
        indexName: 'search_jzzx',
        appId: 'GRSW61FNDF',
        apiKey: '3e07faffcb963f53968c19521786d2d5',
        searchParameters: {
          facetFilters: ['jzzx:fontend']
        }
      },

      carbonAds: {
        code: 'CEBDT27Y',
        placement: 'vuejsorg'
      },
      editLink: {
        repo: 'https://github.com/ErKeLost?tab=repositories',
        text: '在github 上编辑文档'
      },
      footer: {
        license: {
          text: 'MIT License',
          link: 'https://opensource.org/licenses/MIT'
        },
        copyright: `Copyright © 2022-${new Date().getFullYear()} Value Online - ERKELOST-ADNY`
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/erkelost' }
        // { icon: 'twitter', link: 'https://twitter.com/vuejs' },
        // { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
      ]
    }
  }
})()
const cache = new Map<string, boolean>()

/**
 * This is temporarily copied from Vite - which should be exported in a
 * future release.
 *
 * @TODO when this is exported by Vite, VitePress should ship a better
 * manual chunk strategy to split chunks for deps that are imported by
 * multiple pages but not all.
 */
function moveToVendor(id: string, { getModuleInfo }: any) {
  if (
    id.includes('node_modules') &&
    !/\.css($|\\?)/.test(id) &&
    staticImportedByEntry(id, getModuleInfo, cache)
  ) {
    return 'vendor'
  }
}

function staticImportedByEntry(
  id: string,
  getModuleInfo: any,
  cache: Map<string, boolean>,
  importStack: string[] = []
): boolean {
  if (cache.has(id)) {
    return cache.get(id) as boolean
  }
  if (importStack.includes(id)) {
    // circular deps!
    cache.set(id, false)
    return false
  }
  const mod = getModuleInfo(id)
  if (!mod) {
    cache.set(id, false)
    return false
  }

  if (mod.isEntry) {
    cache.set(id, true)
    return true
  }
  const someImporterIs = mod.importers.some((importer: string) =>
    staticImportedByEntry(
      importer,
      getModuleInfo,
      cache,
      importStack.concat(id)
    )
  )
  cache.set(id, someImporterIs)
  return someImporterIs
}
