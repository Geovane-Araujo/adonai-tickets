function onResize (resize) {
  if (window.innerWidth < 700) {
    resize = 100
  }
  console.log(resize)
  return resize
}

export default {
  onResize
}
