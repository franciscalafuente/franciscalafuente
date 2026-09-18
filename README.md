# Francisca Lafuente — Portfolio website

A static, responsive portfolio built with HTML, CSS and lightweight JavaScript. It is ready for GitHub Pages and does not require a build process or paid hosting.

The first screen is an artwork-led entrance. Clicking or tapping it opens the main portfolio homepage in `home.html`.

## Preview on your computer

Open the `dist` folder in a code editor. Because the site uses only ordinary HTML, CSS and JavaScript, you can preview it with a simple local web server or a “Live Server” extension.

## Edit text, projects and artworks

Most content is stored in:

`dist/assets/js/content.js`

Portuguese and English interface translations are stored near the top of `dist/assets/js/main.js`. The site opens in Portuguese and remembers the visitor's `EN | PT` selection.

The entrance uses separate artwork crops for portrait and landscape screens: `dist/assets/images/entrance-art.webp` and `dist/assets/images/entrance-art-desktop.webp`. The responsive signature layer used on the entrance and main homepage is stored in `dist/assets/images/signature-transparent.png`.

### Change biography or contact information

Edit the values inside the `artist` section near the top of `content.js`.

### Add an artwork

1. Put the image in `dist/assets/images/`.
2. Find the correct project in `content.js`.
3. Add a new item inside that project’s `works` list:

```js
{
  src: "assets/images/example-artwork.webp",
  alt: "A useful visual description of the artwork",
  title: "Artwork title",
  details: "2026 · Oil on canvas · 100 × 80 cm",
  size: "portrait"
}
```

Available sizes are `portrait`, `wide`, and `medium`. Add `dark` after a size for work with a black background, for example `portrait dark`.

### Remove an artwork

Delete its `{ ... }` entry from the project’s `works` list. Remember to remove the comma from the previous item if it becomes the last item.

### Add a project

Copy one complete project object inside the `projects` list, give it a unique lowercase `slug`, and replace its title, description, cover image and works.

Set `featured: true` to display the project on the homepage or `featured: false` to keep it only on the Works page.

## Publish with GitHub Pages

1. Create a free account at github.com if you do not already have one.
2. Create a new **public repository**. A good name is `francisca-lafuente-portfolio`.
3. Open the `dist` folder from this package.
4. Upload **everything inside `dist`** to the repository root. Do not upload the `dist` folder itself.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)`, then save.
8. GitHub will provide an address similar to `https://username.github.io/francisca-lafuente-portfolio/`.

For the cleanest address, name the repository `username.github.io`. It will then be published at `https://username.github.io/`.

## Connect a custom domain

After buying a domain:

1. Open **Settings → Pages** in the GitHub repository.
2. Enter the domain under **Custom domain**.
3. Follow GitHub’s displayed DNS instructions at your domain provider.
4. Enable **Enforce HTTPS** after GitHub finishes checking the domain.

## Notes

- The website does not use a database. All content is controlled by `content.js`.
- Email and telephone links work without a server.
- Images are optimized as WebP files for fast loading.
- Keep the original artwork photographs separately; the included copies are web-optimized.
