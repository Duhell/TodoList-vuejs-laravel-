<script setup>
	import useTasks from '../../composables/tasks';
	import { onMounted } from 'vue';

	const { allTask,getAllTasks } = useTasks();

	onMounted(()=> getAllTasks());
</script>

<template>

	<div class="mt-12 p-12">

		<div class="flex justify-end m-2 p-2">
			<RouterLink :to="{name:'taskCreate'}" class="px-4 py-2 bg-indigo-400 hover:bg-indigo-700 text-white rounded">Create New</RouterLink>
		</div>
		<div class="overflow-x-auto relative">
		    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
		            <tr>
		                <th scope="col" class="py-3 px-6">
		                    Todo List
		                </th>
		                <th scope="col" class="py-3 px-6">
		                    Action
		                </th>
		               
		            </tr>
		        </thead>
		        <tbody>
		            <tr v-for="task in allTask" :key="task.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

		                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
		                    {{ task.task }}
		                </td>
		                <td class="py-4 px-6">
		                    Edit | Delete
		                </td>
		                
		            </tr>
		          
		        </tbody>
		    </table>
		</div>
	</div>	
	
</template>