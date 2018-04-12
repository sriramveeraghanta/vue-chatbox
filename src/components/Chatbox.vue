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
  name: 'chatbox',
  props:
  [
    'title',
    'theme'
  ],
  data: function() {
    return {
      
    }
  }
}
</script>

<style>
  
</style>