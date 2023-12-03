# Portfolio Page

## Technical Background

### Eleventy

#### Configuration
See `.eleventy.js`.

#### Layouts
Applying a *layout* to a *template* injects the template into the *content* placeholder of the layout. The layout filepath is relative to the `_includes` folder 

```
[template.hbs]
---
layout: mylayout.hbs
title: Foo
---
```

```
[mylayout.hbs]

```