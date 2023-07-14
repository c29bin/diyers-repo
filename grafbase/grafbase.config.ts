import { g, auth, config } from '@grafbase/sdk'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
// const authProvider = auth.OpenIDConnect({
//   issuer: process.env.ISSUER_URL ?? ''
// })
//
// Define Data Models
// https://grafbase.com/docs/database



const User = g.model('User', {
  name: g.string().length({min: 2, max: 50}),
  email: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedUrl: g.url().optional(),
  diy: g.relation(()=> Diy).list().optional()

 
  // Extend models with resolvers
  // https://grafbase.com/docs/edge-gateway/resolvers
  // gravatar: g.url().resolver('user/gravatar')
})

const Diy = g.model('Diy', {
  title: g.string().length({min:3, max: 50}),
  description: g.string(),
  image: g.url(),
  video: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(()=> User)
})

export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
