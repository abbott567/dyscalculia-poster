const locals = {
  appName: 'Ninja Turtle'
}

function set (req, res, next) {
  res.locals = locals
  next()
}

export default { set }
