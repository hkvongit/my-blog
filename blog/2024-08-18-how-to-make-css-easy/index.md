---
slug: how-to-make-css-easy
title: How to make css easy ?
authors: ["hari"]
tags: [web-dev, html, css, js]
draft: true
# draft will hide this from list of blog
---

The ways I follow to make CSS easy, I mean less difficult.

<!--truncate-->

## Adopt a CSS framework

Frameworks provide a collection of pre-styled components and utility classes, reducing the need to write custom CSS from scratch.

I prefer to use **Tailwind**.

If you can check **[Daisy UI](https://daisyui.com)**, It is great UI library built over tailwind and it is highly customizable. I am too lazy for creating accordions, modal etc from scratch, so I use daisy ui for a skeleton and style it with tailwind as per my need.

## Use CSS GRID for complex layout

Learn CSS GRID, especially grid areas. It will make your styling lot easier.

## Use Tools and Extensions:

- **PostCSS**: A tool that processes your CSS with plugins that can optimize, transform, and lint your styles.
- **Autoprefixer**: A PostCSS plugin that automatically adds vendor prefixes to your CSS, ensuring better cross-browser compatibility.

## Practice DRY (Don’t Repeat Yourself):

Avoid redundant code by reusing existing styles and leveraging mixins or utility classes.

### Mixins

:::info
Mixins are not available in vanilla CSS or tailwind. You should use something like SCSS.
:::

**Example**:

A mixin is defined with the @mixin directive. The following example creates a mixin named "important-text":

```scss
// style.scss

@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```

The @include directive is used to include a mixin. So, to include the important-text mixin created above:

```scss
// style.scss

.danger {
  @include important-text;
  background-color: green;
}
```

## Write CSS only for 3 screen sizes

1. Mobile - **xs** (390px) -> 0 to 390px
2. Tablet - **md** (640px) -> 391 to 640px
3. Desktop - **lg** (1200px) -> 641 to 1200px and 1200px to above.

**Use zoom trick to adjust the size on all other sizes**

## Regularly Refactor and Clean Up:

Periodically review and clean up your CSS to remove unused styles, optimize code, and ensure it remains easy to work with.

## Tailwind specific tips and tricks

### Building your own classes for maximum reusability

- Look up @apply for nesting tw classes into your own classes. But try to keep them small and reusable.

```html
<!-- Before extracting a custom class -->
<button
  class="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
>
  Save changes
</button>

<!-- After extracting a custom class -->
<button class="btn-primary">Save changes</button>
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
}
```

:::note[Know more about @layers and @apply]
Tailwind docs for

- [@layer - click here](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)
- [@apply - click here](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply)
  :::

### Color schemes

Using a bg-primary-500 style then setting primary color in tailwind config. Great for reusable components between projects, or when you're not totally clear on what the accent color will be. Or for multiple components in one project you can usually use find replace across files or multi-cursor mode within a file to change classes.

### Using JIT Mode for Better Performance

[Source of idea](https://www.reddit.com/r/CodeCraft/comments/1eqf6wy/what_are_your_goto_tailwind_css_tips_and_tricks/)

Just-In-Time (JIT) mode is a game-changer for Tailwind CSS. It builds your styles on-demand when you build your project. To enable it, update your tailwind.config.js:

```js
module.exports = {
  mode: "jit",
  // other options
};
```

This makes the development process faster and more efficient.

### Resources:

- [Tailwind tips - Reddit post](https://www.reddit.com/r/tailwindcss/comments/10lj3mu/comment/j5xs9i7/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
- [What Are Your Most Powerful Tailwind CSS Tips and Tricks? - Reddit](https://www.reddit.com/r/CodeCraft/comments/1eprsc0/what_are_your_most_powerful_tailwind_css_tips_and/)
