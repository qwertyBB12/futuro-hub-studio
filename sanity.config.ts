// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure' // default structure tool, no custom builder

export default defineConfig({
  name: 'default',
  title: 'Futuro Hub',
  projectId: 'fo6n8ceo',
  dataset: 'production',
  basePath: '/', // explicit root
  plugins: [structureTool()],
  schema: {
    types: [], // temporarily empty; we'll restore your schema after we confirm prod works
  },
})
