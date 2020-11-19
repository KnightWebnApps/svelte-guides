---
title: Markdown Editor in Svelte
description: 'Rendering Markdown in any Svelte, Sapper,or Routify App is a breeze, lets see how to make a Markdown Editor and Preview Component in Svelte.'
icon: file-document-edit
isPublished: true
slug: svelte-markdown-editor
---

Rendering Markdown to HTML in any Svelte, Sapper,or Routify App is a breeze, I'll show you how to make a Markdown Editor and Preview Component in Svelte.

## Set Up

First get your preferred markdown parser, I like marked.

```bash
npm i marked
```

### Create Editor and Preview Components

In your Editor Component we create a textarea and bind it to a markdown string variable.  

In the Preview Component import marked, create a prop for our markdown string, and use the @html directive in Svelte to render as HTML.

Editor.svelte

```svelte
<script>
  // Declare a variable to store the markdown data
  export let markdown = "# Example Title\n\n- this\n- is\n- a list"
</script>

<!-- Declare a textarea where the user can enter markdown -->
<textarea bind:value={markdown} placeholder="Enter markdown here"/>
```

Preview.svelte

```svelte
<script>
  import marked from 'marked'
  
  // Markdown prop
  export let markdown = ""
</script>

<!-- Convert the Markdown to HTML -->
<div class="preview">{@html marked(markdown)}</div>
```

### Implement for your use case

Some ideas of how to use these components

- Use a toggle button to switch between Editor and Preview
- Display Preview below Editor
- Display Preview in a Modal
- Render in a layout that matches the style of the production interface

#### Other Ideas

- Add Action Button for useful markdown syntax, to help ease mobile input
- Automatic formatting for adding to lists
- Syntax Error highlighting
  