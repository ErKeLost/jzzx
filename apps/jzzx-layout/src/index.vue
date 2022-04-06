<template>
  <div class="adny-layout" :style="{ minWidth: minWidth + 'px' }">
    <layout-header
      v-if="headerVisible"
      v-bind="commonProps"
      :fixed="fixedHeaderAndTab"
      :z-index="headerZIndex"
      :min-width="minWidth"
      :height="headerHeight"
      :padding-left="headerPaddingLeft"
      :style="headerAndTabTransform"
    >
      <slot name="header"></slot>
    </layout-header>
    <layout-tab
      v-if="tabVisible"
      v-bind="commonProps"
      :fixed="fixedHeaderAndTab"
      :z-index="tabZIndex"
      :min-width="minWidth"
      :top="headerHeight"
      :height="tabHeight"
      :padding-left="siderWidth"
      :style="headerAndTabTransform"
    >
      <slot name="tab"></slot>
    </layout-tab>
    <div class="adny-layout__bottom">
      <layout-sider
        v-if="siderVisible"
        v-bind="commonProps"
        :z-index="siderZIndex"
        :width="siderWidth"
        :padding-top="siderPaddingTop"
        :isFixed="siderFixed"
      >
        <slot name="sider"></slot>
      </layout-sider>
      <div class="adny-layout__bottom__right" :style="siderFixed ? `margin-left: ${siderWidth}px` : null">
        <layout-content
          v-bind="commonProps"
          :padding-top="contentPaddingTop"
          :padding-bottom="contentPaddingBottom"
          :padding-left="siderWidth"
        >
          <slot></slot>
        </layout-content>
        <layout-footer
          v-if="footerVisible"
          v-bind="commonProps"
          :fixed="fixedFooter"
          :z-index="footerZIndex"
          :min-width="minWidth"
          :height="footerHeight"
          :padding-left="siderWidth"
          :style="footerTransform"
        >
          <slot name="footer"></slot>
        </layout-footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi'
import LayoutTab from './components/src/LayoutTab.vue'
import LayoutContent from './components/src/LayoutContent.vue'
import LayoutSider from './components/src/LayoutSider.vue'
import LayoutHeader from './components/src/LayoutHeader.vue'
import LayoutFooter from './components/src/LayoutFooter.vue'
import { useCssRender, useFixedTransformStyle } from './hooks'
interface Props {
  /** 布局模式 */
  mode?: 'vertical' | 'horizontal'
  /** 最小宽度 */
  minWidth?: number
  /** 左侧fixed布局 */
  siderFixed?: boolean
  /** 头部可见 */
  headerVisible?: boolean
  /** 头部高度 */
  headerHeight?: number
  /** 标签可见 */
  tabVisible?: boolean
  /** 标签页高度 */
  tabHeight?: number
  /** 固定头部和标签 */
  fixedHeaderAndTab?: boolean
  /** 底部可见 */
  footerVisible?: boolean
  /** 底部高度 */
  footerHeight?: number
  /** 固定底部 */
  fixedFooter?: boolean
  /** 侧边可见 */
  siderVisible?: boolean
  /** 侧边栏高度 */
  siderWidth?: number
  /** 侧边栏折叠状态的高度 */
  siderCollapsedWidth?: number
  /** 侧边栏折叠状态 */
  siderCollapse?: boolean
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡速度曲线 */
  transitionTimingFunction?: string
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'vertical',
  minWidth: 1200,
  headerVisible: true,
  headerHeight: 56,
  siderFixed: true,
  tabVisible: true,
  tabHeight: 44,
  fixedHeaderAndTab: true,
  footerVisible: true,
  footerHeight: 68,
  fixedFooter: true,
  siderVisible: true,
  siderWidth: 200,
  siderCollapsedWidth: 64,
  siderCollapse: false,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out'
})
const { cssRender } = useCssRender()
// fixed布局时，应用translateX样式(水平方向出现滚动条，拖动滚动条时，fixed元素跟着滚动)
const hasFixedEl = computed(() => props.fixedHeaderAndTab || props.fixedFooter)
const transformStyle = useFixedTransformStyle(hasFixedEl)
const headerAndTabTransform = computed(() =>
  props.fixedHeaderAndTab ? transformStyle.value : ''
)
const footerTransform = computed(() =>
  props.fixedFooter ? transformStyle.value : ''
)
/** 各个子组件的公共属性 */
const commonProps = computed(() => {
  const { transitionDuration, transitionTimingFunction } = props
  return {
    transitionDuration,
    transitionTimingFunction
  }
})
/** 水平布局 */
const isVertical = computed(() => props.mode === 'vertical')
// fixed布局时的层级
const headerZIndex = 1001
const tabZIndex = 999
const siderZIndex = computed(() => (isVertical.value ? 1002 : 1000))
const footerZIndex = 999
/** 侧边宽度 */
const siderWidth = computed(() => {
  const { siderCollapse, siderWidth, siderCollapsedWidth } = props
  const width = siderCollapse ? siderCollapsedWidth : siderWidth
  return props.siderVisible ? width : 0
})
// 各子组件的属性
const headerPaddingLeft = computed(() =>
  isVertical.value ? siderWidth.value : 0
)
const siderPaddingTop = computed(() =>
  !isVertical.value && props.headerVisible ? props.headerHeight : 0
)
const contentPaddingTop = computed(() => {
  let height = 0
  if (props.fixedHeaderAndTab) {
    if (props.headerVisible) {
      height += props.headerHeight
    }
    if (props.tabVisible) {
      height += props.tabHeight
    }
  }
  return height
})
const contentPaddingBottom = computed(() =>
  props.fixedFooter && props.footerVisible ? props.footerHeight : 0
)
// css
cssRender('.adny-layout__bottom', {
  display: 'flex',
  // flexDirection: 'column',
  width: '100%',
  height: '100%'
})
cssRender('.adny-layout__bottom__right', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  height: '100%'
})
</script>
<style></style>
