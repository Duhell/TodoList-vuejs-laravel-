<script setup>
	import useTasks from '../../composables/tasks';
    import { onMounted } from 'vue';
    const {singleTask, getSingleTask, updateTask, errors} = useTasks();

    const props = defineProps({
        id: {
            required: true,
            type: String,
        }
    })

    onMounted(()=>getSingleTask(props.id))
</script>

<template>
      <form class="mt-5 w-3/5 mx-auto" @submit.prevent="updateTask($route.params.id)">
    <div>
      <label
        for="task"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
        >Your Task</label
      >
      <input
        type="text"
        id="task"
        v-model= "singleTask.task"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="My task for today..."
        
      />
    </div>
    <div v-if="errors.task">
      <span class="text-sm text-red-400">{{ errors.task[0] }}</span>
    </div>
    <input
        type="submit"
        id="create"
        class="mt-3 text-white bg-slate-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-teal-800"
        value="Create"
      />
  </form>
</template>