export const hasClass = (el, className) => new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className)

export const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
