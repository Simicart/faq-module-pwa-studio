# FAQ module for Magento PWA Studio

This module acts as an add-on for [Mageplaza's FAQ extension](https://www.mageplaza.com/magento-2-faq-extension/) to make it work with Magento PWA Studio.

End result: https://faq.pwa-commerce.com/

## Requirements

- Magento version 2.4.* or >= 2.3.5
- Got [Mageplaza Shop By Brand extension](https://www.mageplaza.com/magento-2-shop-by-brand/) and [FAQ GraphQL](https://github.com/mageplaza/magento-2-faqs-graphql) installed

## Installation

### 1. Init project
```
npm init @magento/pwa@1.1.2
```

Fill in your project information and `cd` into it.

### 2. Start the project

From the root directory of the project you created above, clone the repository:

```
  git clone https://github.com/Simicart/faq-module-pwa-studio ./@faq/faq
```

### 3. Modify .env

Change the .env MAGENTO_BACKEND_URL with your Magento site URL, or use our demo URL:

```
  MAGENTO_BACKEND_URL=https://mpmed.pwa-commerce.com/
```
### 4. Modify package.json

Modify the dependencies of your project to add Shop By Brand extension.

```
  "dependencies": {
    "@magento/pwa-buildpack": "~7.0.0",
    "@faq/faq": "link:./@faq/faq"
  },
```

### 5. Install and Start Project

```
  yarn install && yarn watch
```
## Contribution

[SimiCart Team](https://www.simicart.com/pwa.html/) & [Mageplaza Team](https://www.mageplaza.com/)
