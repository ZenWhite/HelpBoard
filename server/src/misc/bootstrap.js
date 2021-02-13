const PORT = 3000

async function bootstrap(app, modules, cb) {
  console.log(`\x1b[34m...bootstrap...\x1b[0m\n`)

  for (const module in modules) {
    app.use(modules[module].router.base, modules[module].router.router)

    console.log(`\x1b[33mmodule\x1b[0m \x1b[32m${module}\x1b[0m loaded`)
  }

  await app.listen(PORT, cb(PORT))
}

export default bootstrap
