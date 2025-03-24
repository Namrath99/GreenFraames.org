module.exports = {
  content: [
    "./src/**/*.{html,js}" // This tells Tailwind to watch all HTML and JS files inside src
  ],
  safelist: [
    "xl:top-[0]",
    "xl:w-full",
    "max-sm:top-[-17.5vh]",
    "max-md:top-[-22.5vh]",
    "md:top-[-22vh]",
    "w-screen",
    "max-xl:!h-[50vh]",
    "z-30",
    "bg-black",
    "max-sm:top-[32.5vh]",
    "max-md:top-[27.5vh]",
    "md:top-[28vh]",
    "h-[42.5vh]",
    "bg-green-200",
    "touch-auto",
    // Add any more dynamically injected classes here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
