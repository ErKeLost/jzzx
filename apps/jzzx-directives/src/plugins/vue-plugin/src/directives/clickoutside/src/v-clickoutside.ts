export const clickoutside = (el: HTMLElement, value: any) => {
  document.addEventListener('click', (e: any) => {
    !el.contains(e.target) && value();
  }, false)
}

export const deleteClickOutside = (el: HTMLElement, value: any) => {
  document.removeEventListener('click', () => {})
}
