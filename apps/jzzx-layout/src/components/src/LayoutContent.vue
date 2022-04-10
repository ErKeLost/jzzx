<template>
  <main :style="style" class="adny-layout__main">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi'
import { useCssRender } from '@/hooks'
interface Props {
  holdHeaderFixedSider?: boolean
  siderVisible?: boolean
  fixedSider?: boolean
  /** 顶部内边距 */
  paddingTop?: number
  /** 底部内边距 */
  paddingBottom?: number
  /** 左侧内边距 */
  paddingLeft?: number
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡时间 */
  transitionTimingFunction?: string
}
const props = withDefaults(defineProps<Props>(), {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out'
})
const { cssRender } = useCssRender()
const style = computed(() => {
  const {
    holdHeaderFixedSider,
    paddingTop,
    siderVisible,
    paddingBottom,
    paddingLeft,
    fixedSider,
    transitionDuration,
    transitionTimingFunction
  } = props
  const marginLeft =
    (siderVisible && fixedSider) || (holdHeaderFixedSider && fixedSider)
      ? paddingLeft
      : 0

  // return `padding-top: ${paddingTop}px;padding-bottom: ${paddingBottom}px;padding-left: ${paddingLeft}px;transition-duration: ${transitionDuration}ms;transition-timing-function: ${transitionTimingFunction};`;
  return `margin-top: ${paddingTop}px; padding-left: ${marginLeft}px;transition-duration: ${transitionDuration}ms;transition-timing-function: ${transitionTimingFunction};`
})

// css
cssRender('.adny-layout__main', {
  flex: 1,
  flexGrow: 1,
  boxSizing: 'border-box',
  width: '100%'
  // transitionProperty: 'padding-left'
})
</script>
