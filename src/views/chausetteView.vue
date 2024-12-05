<!-- src/views/ChausetteView.vue -->
<template>
  <div>
    <h1>Welcome to Chausette View</h1>
    <!-- Use the components here -->
    
    <ProductDisplay></ProductDisplay>
    
   
  </div>
</template>

<script>
// Import components from the components folder
import ProductDisplay from '../components/ProductDisplay'; 


export default {
  name: 'ChausetteView',
  components: {
  
    ProductDisplay,

    
    
  }
};
</script>

<style scoped>
/* Styles for ChausetteView */
</style>

