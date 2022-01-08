# About

## Quick Start

Create `index.html`:

```html
<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/saika/dist/saika.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@saika/theme-portfolio/dist/index.css">
</head>
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/saika"></script>
  <script src="https://cdn.jsdelivr.net/npm/@saika/theme-portfolio"></script>
  <script>
    new Saika({
      target: 'app',
      github: '2nthony', // replace with your github username
      plugins: [
        saikaThemePortfolio
      ]
    })
  </script>
</body>
</html>
```

Then serve is as static website your should see your lovely portfolio.
