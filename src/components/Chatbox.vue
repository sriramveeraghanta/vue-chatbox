<template>
  <div class="chatbox-container">
    <div class="chatbot-header">
      {{Title}}
    </div>
    <div class="chatbox-body">
      
    </div>
    <div class="chatbox-footer">
      <input type="text" autocomplete="off">
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuecomponent',
  props:
  [
    'title',
    'theme'
  ],
  data() {
    return {
      
    }
  }
}
</script>

<style>
.chatbox-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.chatbot-header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 40px;
}
.chatbox-body {
  position: absolute;
  top: 40px;
  right: 0;
  bottom: 40px;
  left: 0;
  width: 100%;
}
.chatbox-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}
</style>