export default async (to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.name !== 'Login' && token === null) {
    next({ name: 'Login' })
  } else if (to.name === 'Login') {
    next()
  } else {
    next()
  }
}
