# Astrofy | Personal Portfolio Website Template

![Astrofy | Personal Porfolio Website Template](public/social_img.webp)

Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with a Blog, CV, Project Section, Store, and RSS Feed.

## Demo

View a live demo of [Astrofy](https://astrofy-template.netlify.app/)

## Installation

Run the following command in your terminal

```bash
pnpm install
```

Once the packages are installed you are ready to run astro. Astro comes with a built-in development server that has everything you need for project development. The astro dev command will start the local development server so that you can see your new website in action for the very first time.

```bash
pnpm run dev
```

## Tech Stack

- [Astro](https://astro.build)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Project Structure

```php
├── src/
│   ├── components/
│   │   ├── cv/
│   │   │   └── TimeLine.astro
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HorizontalCard.astro
│   │   ├── HorizontalShopItem.astro
│   │   ├── SideBar.astro
│   │   ├── SideBarMenu.astro
│   │   └── SideBarFooter.astro
│   ├── content/
│   │   ├── education/
│   │   │   ├── alta-scuola-politecnica.md
│   │   │   ├── erasmus-programme.md
│   │   │   ├── laurea-triennale.md
│   │   │   ├── master-polimi.md
│   │   │   ├── master-polito.md
│   │   │   └── phd-university-of-trento.md
│   │   ├── projects/
│   │   │   ├── knowai-project.md
│   │   │   ├── polimi-data-scientists.md
│   │   │   └── sei-pioneer-project.md
│   │   ├── research-papers/
│   │   │   ├── controlled-text-generation.md
│   │   │   ├── dice-image-editing-evaluation.md
│   │   │   ├── lets-vice.md
│   │   │   └── optimizing-resource-consumption.md
│   │   ├── work-experience/
│   │   │   ├── energyway-data-scientist.md
│   │   │   ├── leonardo-ai-research-fellow.md
│   │   │   ├── meta-liquid-ai-engineer.md
│   │   │   └── typewise-senior-ai-engineer.md
│   │   └── config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PostLayout.astro
│   │   └── StoreItemLayout.astro
│   ├── lib/
│   │   └── createSlug.ts
│   ├── pages/
│   │   ├── education/
│   │   │   └── [slug].astro
│   │   ├── projects/
│   │   │   └── [slug].astro
│   │   ├── research-papers/
│   │   │   └── [slug].astro
│   │   ├── work-experience/
│   │   │   └── [slug].astro
│   │   ├── 404.astro
│   │   ├── education.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── research-papers.astro
│   │   ├── work-experience.astro
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   ├── config.ts
│   └── env.d.ts
├── public/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.png
│   ├── itemPreview.webp
│   ├── me.jpg
│   ├── post_img.webp
│   ├── profile.webp
│   ├── robots.txt
│   ├── site.webmanifest
│   └── social_img.webp
├── scripts/
│   └── update-timestamp.js
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

### Site config

You can change global site configuration on '/src/config.ts' file:

- **SITE_TITLE**: Default pages title.
- **SITE_DESCRIPTION**: Default pages title.
- **GENERATE_SLUG_FROM_TITLE**: By default Astrofy will generate the blog slug pages base on the article name. Set this var to false if you want to use the Astro file base (Compatible with Astrofy older versions).
- **TRANSITION_API**: Enable and disable transition API

### Components usage

#### Layout Components

The `BaseHead`, `Footer`, `Header`, and `SideBar` components are already included in the layout system. To change the website content you can edit the content of these components.

##### SideBar

In the Sidebar you can change your profilePicture, links to all your website pages, and your social icons.

You can change your avatar shape using [mask classes](https://daisyui.com/components/mask/).

The used social-icons are SVG form [BoxIcons](https://boxicons.com/) pack. You can replace the icons in the `SideBarFooter` component

To add a new page in the sidebar go to the `SideBarMenu` component.

```
<li><a class="py-3 text-base" id="home" href="/">Home</a></li>

```

**Note**: In order to change the sidebar menu's active item, you need to setup the prop `sideBarActiveItemID` in the `BaseLayout` component of your new page and add that id to the link in the `SideBarMenu`

#### TimeLine

The timeline components are used to confirm the CV.

```html
<div class="time-line-container">
  <TimeLineElement title="Element Title" subtitle="Subtitle">
    Content that can contain
    <div>divs</div>
    and <span>anything else you want</span>.
  </TimeLineElement>
  ...
</div>
```

#### Card & HorizontalCard

The cards are primarly used for the Project and the Blog components. They include a picture, a title, and a description. 

```html
<HorizontalCard title="Card Title" img="imge_url" desc="Description" url="Link
URL" target="Optional link target (_blank default)" badge="Optional badge"
tags={['Array','of','tags']} />
```

#### HorizontalCard Shop Item


This component is already included in the Store layout of the template. In case you want to use it in another place these are the props.

```html
<HorizontalShopItem
  title="Item Title"
  img="imge_url"
  desc="Item description"
  pricing="current_price"
  oldPricing="old_price"
  checkoutUrl="external store checkout url"
  badge="Optional badge"
  url="item details url"
  custom_link="Custom link url"
  custom_link_label="Cutom link btn label"
  target="Optional link target (_self default)"
/>
```

#### Adding a Custom Component

To add a custom component, you can create a .astro file in the components folder under the source folder. 

Components must follow this template. The ```---``` represents the code fence and uses Javascript and can be used for imports. 

The HTML component is the actual style of your new component. 

```html
---
// Component Script (JavaScript)
---
<!-- Component Template (HTML + JS Expressions) -->
```

For more details, see the [astro components](https://docs.astro.build/en/core-concepts/astro-components/) documentation here. 

### Layouts

Include `BaseLayout` in each page you add and `PostLayout` to your post pages.

The BaseLayout defines a general template for each new webpage you want to add. It imports constants SITE_TITLE and SITE_DESCRIPTION which can be modified in the ```../config``` folder. Data placed there can be imported anywhere using import. 

### Content

You can add a [content collection](https://docs.astro.build/en/guides/content-collections/) in `/content/' folder, you will need add it at config.ts.

#### config.ts

Where you need to define your content collections, we define our content schemas too.

#### Content Collections

The project uses the following content collections:

##### Education

Add your education entries in the `/content/education/` folder.

##### Projects

Add your project entries in the `/content/projects/` folder.

##### Research Papers

Add your research paper entries in the `/content/research-papers/` folder.

##### Work Experience

Add your work experience entries in the `/content/work-experience/` folder.

##### Content Entry format

Add code with this format in the top of each content file.

```
---
title: "Entry Title"
description: "Description"
pubDate: "Date format(Sep 10 2022)"
heroImage: "Image URL (optional)"
---
```

### Pages

#### Content Collection Pages

Each content collection has its own page and dynamic routing:

- `/education.astro` - Lists all education entries
- `/projects.astro` - Lists all projects
- `/research-papers.astro` - Lists all research papers
- `/work-experience.astro` - Lists all work experience

##### [slug].astro

Each collection has a `[slug].astro` file in its respective directory that handles individual entry pages:

- `/education/[slug].astro` - Individual education entry pages
- `/projects/[slug].astro` - Individual project pages
- `/research-papers/[slug].astro` - Individual research paper pages
- `/work-experience/[slug].astro` - Individual work experience pages

#### Static pages

The other pages included in the template are static pages. The `index` page belongs to the root page. You can add your pages directly in the `/pages` folder and then add a link to those pages in the `sidebar` component.

Feel free to modify the content included in the pages that the template contains or add the ones you need.

### Theming

To change the template theme change the `data-theme` attribute of the `<html>` tag in `BaseLayout.astro` file.

You can choose among 30 themes available or create your custom theme. See themes available [here](https://daisyui.com/docs/themes/).

## Sitemap

The Sitemap is generated automatically when you build your website in the root of the domain. Please update the `robots.txt` file in the public folder with your site name URL for the Sitemap.

## Deploy

You can deploy your site on your favourite static hosting service such as Vercel, Netlify, GitHub Pages, etc.

The configuration for the deployment varies depending on the platform where you are going to do it. See the [official Astro information](https://docs.astro.build/en/guides/deploy/) to deploy your website.

> **⚠️ CAUTION** </br>
> The Blog pagination of this template is implemented using dynamic route parameters in its filename and for now this format is incompatible with SSR deploy configs, so please use the default static deploy options for your deployments.

## Contributing

Suggestions and pull requests are welcomed! Feel free to open a discussion or an issue for a new feature request or bug.

One of the best ways to contribute is to grab a [bug report or feature suggestion](https://github.com/manuelernestog/astrofy/issues) that has been marked `accepted` and dig in.

Please be wary of working on issues _not_ marked as `accepted`. Just because someone has created an issue doesn't mean we'll accept a pull request for it.

## License

Astrofy is licensed under the MIT license — see the [LICENSE](https://github.com/manuelernestog/astrofy/blob/main/LICENSE) file for details.

## Contributors

<a href="https://github.com/manuelernestog/astrofy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=manuelernestog/astrofy" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
