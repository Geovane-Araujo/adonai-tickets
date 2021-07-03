export default async (to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name === 'DashBoard' && (token !== '' && token !== null)) {
    next()
  } else if (to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
}
