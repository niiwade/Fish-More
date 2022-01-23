module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  content: [],
  theme: {
    extend: {},
    backgroundImage: {
      'hero-bg': "url('/cbg.svg')",
      'hero-bg2': "url('/bg2.svg')"
    },
  },
  plugins: [],
}
