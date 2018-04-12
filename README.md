# Vue ChatBox

A Vue component that adds a chatbox to your page.

This isn't particularly useful, it's used as a demo for how to publish Vue components to NPM!

## Installation

```js
npm install --save vue-chatbox
```

### Browser

Include the script file, then install the component with `Vue.use(VueChatbox);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-chatbox/dist/vue-chatbox.min.js"></script>
<script type="text/javascript">
  Vue.use(VueChatbox);
</script>
```

### Module

```js
import VueChatbox from 'vue-chatbox';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-chatbox></vue-chatbox>
```