function onResize (resize) {
  if (window.innerWidth < 700) {
    resize = 100
  }
  return resize
}

export default {
  onResize
}
