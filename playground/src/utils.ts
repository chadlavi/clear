export const setTitle = (title?: string): void => {
  document.title = `Clear${title? ` | ${title}` : ''}`
}
