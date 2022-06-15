export const clickoutside = (el: HTMLElement, value: any) => {
  document.addEventListener(
    'click',
    (e: any) => {
      console.log(e.target)
      !el.contains(e.target) && value()
    },
    false
  )
}

export const deleteClickOutside = () => {
  document.removeEventListener('click', () => {})
}
