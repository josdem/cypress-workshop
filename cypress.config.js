const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {},
  env: {},
})

require("@applitools/eyes-cypress")(module)
