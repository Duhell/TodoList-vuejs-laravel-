import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost:8000/api/";

export default function useTasks(){

	const allTask = ref([]);
	const singleTask = ref([]);
	const errors = ref({});
	const router = useRouter();

	const getAllTasks = async()=>{

		const response = await axios.get("tasks");
		allTask.value = response.data.data;
	}

	const getSingleTask = async(id) => {

		const response = await axios.get(`tasks/${id}`);
		singleTask.value = response.data.data;
	}

	const storeTask = async(data) =>{

		try {
			await axios.post("tasks", data);
			await router.push({name: "taskIndex"});
		}catch(error){
			if (error.response.status === 422) {
				errors.value = error.response.data.errors;
			}
		}

	}

	const updateTask = async(id)=>{

		try{
			await axios.put(`tasks/${id}`, singleTask.value);
			await router.push({name: "taskIndex"});

		}catch(error){
			if (error.response.status === 422) {
				errors.value = error.response.data.errors;
			}
		}
	}

	const deleteTask = async(id)=>{
		if (!window.confirm("Are you sure?")) {return;}
		await axios.delete(`tasks/${id}`);
		await getAllTasks();
	}

	return {
		allTask,
		singleTask,
		errors,
		getAllTasks,
		getSingleTask,
		storeTask,
		updateTask,
		deleteTask
	};
}