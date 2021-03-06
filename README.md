# chrisbracco.com

> The source code for Chris Bracco’s personal website. Based heavily on [11st-starter-kit][11st-starter-kit] by [@stefanfrede][@stefanfrede], [vredeburg][vredeburg] by [dafiulh][dafiulh], [elevenpack][elevenpack] by [deviousdodo][deviousdodo], and [eleventy-base-blog][eleventy-base-blog] by [zachleat][zachleat].

## Features

-   [Eleventy][eleventy] for static site generation.
-   [Webpack][webpack] for bundling and cache busting assets.
-   [PostCSS][postcss] for CSS [file imports][postcss-import], [future-friendly syntax][postcss-preset-env], [vendor prefixing][autoprefixer] and [minification][cssnano].
- Continuous deployment with GitHub Actions to GitHub Pages.

## Installation

Clone this repository to your local machine, and install its dependencies with the following command(s):

```bash
git clone git@github.com:cbracco/chrisbracco.com.git
cd chrisbracco.com/
npm install
```

## Usage

### Developing

To start working locally, first run the following command(s):

```bash
npm start
```

### Serve production locally

If you want to preview your production build locally, run the following command(s):

```bash
npm run build && npm run serve
```

### Deploying

Deployments happen automatically every time you push a change to the `master` branch of this repository. Hurray for continuous deployment!

[@stefanfrede]: https://github.com/stefanfrede/
[11st-starter-kit]: https://github.com/stefanfrede/11st-starter-kit/
[autoprefixer]: https://github.com/postcss/autoprefixer
[cssnano]: https://github.com/cssnano/cssnano
[dafiulh]: https://github.com/dafiulh/
[deviousdodo]: https://github.com/deviousdodo
[elevenpack]: https://github.com/deviousdodo/elevenpack
[eleventy]: https://www.11ty.dev
[eleventy-base-blog]: https://github.com/11ty/eleventy-base-blog
[postcss]: https://postcss.org
[postcss-import]: https://github.com/postcss/postcss-import
[postcss-preset-env]: https://github.com/csstools/postcss-preset-env
[webpack]: https://webpack.js.org/
[vredeburg]: https://github.com/dafiulh/vredeburg
[zachleat]: https://github.com/zachleat
