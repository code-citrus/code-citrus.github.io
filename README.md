# Portfolio Page

## Github Pages (https://pages.github.com)
You get one "site" per GitHub account and unlimited project site. To create your account site, such as this one, the repository must be named as : *username*.github.io.

### Custom Domain
The domain registrar (ex: GoDaddy) is responsible for providing the appropriate TLD registry (ex: VeriSign for .com) with the authoritative NS recoreds for the domain. These NS records point to the authoratative nameservers that host the Zone for your domain (ex: DigitalOcean/Route53). You then need to add A records to the zone that point to GitHub as described [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).


### Github Actions & Deployments
GitHub *workflows* are defined in `./github/workflows` and are a container for one or more *jobs* that are executed concurrently on Linux/Windows/MacOS VM *runners*. Each job is a set of *steps*. A step can be an *action*: a re-usable task that you can define yourself or get from the *actions marketplace*.

Github provides *artifacts* and *caches* as a form temporary file storage.
    - [Articacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)
    - [Caching](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)

### Deployment Workflow
1. `Checkout`:
    - Checks out the code repository
2. `Setup Node`: 
    - Installs Node/NPM & packages. Optionally, caches Node & NPM dependencies
    - `cache: npm`: Uses hash of `package.lock.json` as cache key. The cached artifact is the global NPM cache and not the `node_modules/` folder; this allows the cache to work for multiple node versions.
3. `Setup Pages`: 
    - This is needed to deploy to GitHub pages
4. `Build with 11ty`:
    - Run `npx @11ty/eleventy` which outputs build to `_site` directory
5. `Upload Artifact`:
    - Compresses the `_site` dir to deployment TAR
6. `Deploy to Github Pages`:
    - By default, uses `github-pages` as default artifact id


