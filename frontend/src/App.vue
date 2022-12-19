<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto ">
      <nav>
        <RouterLink to="/" 
        class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" >Home</RouterLink>
        <RouterLink to="/tasks"  
        class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" >Tasks</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl min-h-screen">
      <RouterView />
  </main>
</template>



