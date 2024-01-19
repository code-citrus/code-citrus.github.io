# Portfolio Page

## Github Pages (https://pages.github.com)
You get one "site" per GitHub account and unlimited project site. To create your account site, such as this one, the repository must be named as : *username*.github.io.

### Custom Domain
The domain registrar (ex: GoDaddy) is responsible for providing the appropriate TLD registry (ex: VeriSign for .com) with the authoritative NS recoreds for the domain. These NS records point to the authoratative nameservers that host the Zone for your domain (ex: DigitalOcean/Route53). You then need to add A records to the zone that point to GitHub as described [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

### Secure with HTTPS
[TODO]

### Github Actions
ALlow configuration of a GitHub action *workflow* (containing one ore more *jobs*) when an *event* occurs (ex: PR request). Worflows are defined in the `.github/workflows` directory in YAML files. When triggered, workflwos are run by runners* which are Ubuntu, Windows, or MacOS VMs. 