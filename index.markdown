---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# Projects

## [Landing Page]()
This webpage embraces JAMStack! It is built using Jekyll and
deployed through github pages.

### Skills
- Jekyll
- Github Pages

## [The Wright Company](http://gauthamg.com/wrightco)
This was a project for a CourseEra course on Bootstrap.
I wanted to create a webpage that could be used by the
Wright Brothers during the early 1900s had the internet
actually existed.

### Notes
- *CI/CD*: When code is pushed, a CircleCI job is created to 
  pull the code into a docker container and build the site 
  using webpack. The output is a static html site deployed
  to the same github repo but on the github-pages branch.

- *Design*: I used a fixed header and footer to frame each section
  of scrollable content. The content itself was divided into small
  and concise tidbits. 

- *Design*: Used scrolling content with CSS scroll snapping so
  that the content will tend to stop scrolling at predefined
  points.

### Skills Learned
- Boostrap 4 - Basic layouts, headers, and esponive design
- CI/CD w/ CircleCI & GitHub Pages
- Webpack

