---
title: Running Routify with your Keystone CMS
description: 'Let us see how to serve a Routify/Svelte App with a custom Keystone Server.'
icon: alpha-k-box
isPublished: false
slug: keystone-and-routify
---

## Set Up

First let's set up Keystone.

#### Initialize Keystone (replace 'my-app' with your preferred app-name).

```bash
npm init keystone-app my-app
# or
yarn create keystone-app my-app
```

#### Decide on MondoDB or PostGreSQL for your database and get the connection url to finish setup.

If you are using PostGreSQL you will need to create your tables.

```bash
yarn create-tables
# or
npm run create-tables
```

#### 
