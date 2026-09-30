# IK Groups — Website

Official website for **IK Groups**.

**Live URL:** [https://ikgroups.net](https://ikgroups.net)

---

## Current Phase

**Phase 0 — Coming Soon**

A single premium landing page announcing the upcoming website.

---

## Project Structure

```
ikgroups/
├── index.html            # Main HTML page
├── css/
│   └── style.css         # Stylesheet
├── js/
│   └── main.js           # Minimal JavaScript
├── assets/
│   ├── icons/
│   │   └── favicon.svg   # SVG favicon
│   ├── images/            # (future) Image assets
│   └── fonts/             # (future) Custom fonts
├── robots.txt            # Search engine directives
├── sitemap.xml           # XML sitemap
├── CNAME                 # GitHub Pages custom domain
└── README.md             # This file
```

---

## Deployment

This site is deployed via **GitHub Pages** from the `main` branch.

### Custom Domain Setup

1. In the repository **Settings → Pages**, set the custom domain to `ikgroups.net`.
2. Configure DNS records with your domain registrar:

   | Type  | Name  | Value                        |
   |-------|-------|------------------------------|
   | A     | @     | 185.199.108.153              |
   | A     | @     | 185.199.109.153              |
   | A     | @     | 185.199.110.153              |
   | A     | @     | 185.199.111.153              |
   | CNAME | www   | ikgroups.github.io           |

3. Enable **Enforce HTTPS** in GitHub Pages settings.

---

## Updating Contact Info

Edit `js/main.js` and update the `CONTACT` configuration:

```js
var CONTACT = {
  type: 'mailto',              // 'mailto', 'tel', 'whatsapp', or 'url'
  value: 'info@ikgroups.net'   // email, phone number, or URL
};
```

---

## Future Phases

| Phase | Scope                      |
|-------|----------------------------|
| 0     | Coming Soon (current)      |
| 1     | Corporate Website          |
| 2     | Business Features          |
| 3     | SEO & Digital Presence     |
| 4     | Automation & Integrations  |

---

## License

© IK Groups. All rights reserved.
