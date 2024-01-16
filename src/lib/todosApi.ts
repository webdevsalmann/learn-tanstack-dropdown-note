import conf from "@/lib/conf";
import axios from "axios";

const todosApi = axios.create({
    baseURL: conf.serverEndpoint
})

// =========================================================
// LISTS CRUD
// =========================================================
// READ LIST
export const getLists = async () => {
    return await todosApi.get("/lists")
}

// CREATE LIST
export const createList = async (payload: any) => {
    console.log("Creating list...");
    return await todosApi.post("/lists", payload)
}

// UPDATE LIST
export const updateList = async () => {
    return await todosApi.patch("/lists")
}

// DELETE LIST
export const deleteList = async (id: any) => {
    return await todosApi.delete(`/lists/${id}`, id)
}



// =========================================================
// TASKS CRUD
// =========================================================
// READ LIST
export const getTasks = async () => {
    return (await todosApi.get("/tasks"))
}

export const getTasksByListId = async (taskId: any) => {
    return (await todosApi.get(`/tasks?listId=${taskId}`))
}

// CREATE LIST
export const createTask = async (payload: any) => {
    return await todosApi.post("/tasks", payload)
}

// UPDATE LIST
export const toggleTaskCompletion = async (taskId: number, completed: boolean) => {
    return await todosApi.patch(`/tasks/${taskId}`, { completed });
}

// DELETE LIST
export const deleteTask = async (id: any) => {
    return await todosApi.delete(`/tasks/${id}`, id)
}










// =========================================================
// SUB-TASKS CRUD
// =========================================================
// CREATE SUB-TASK
export const createSubTask = async (payload: any) => {
    return await todosApi.post("/sub-tasks", payload)
}

// READ SUB-TASKS
export const getSubTasksByTaskId = async (taskId: any) => {
    return (await todosApi.get(`/sub-tasks/?taskId=${taskId}`))
}    









// =========================================================
// SUB-TASKS-TWO CRUD
// =========================================================
// CREATE SUB-TASK
export const createSubTaskTwo = async (payload: any) => {
    return await todosApi.post("/sub-tasks-two", payload)
}

// READ SUB-TASKS-TWO
export const getSubTasksTwoBySubTaskId = async (subTaskId: any) => {
    return (await todosApi.get(`/sub-tasks-two/?subTaskId=${subTaskId}`))
}    









// =========================================================
// SUB-TASKS-THREE CRUD
// =========================================================
// CREATE SUB-TASK
export const createSubTaskThree = async (payload: any) => {
    return await todosApi.post("/sub-tasks-three", payload)
}

// READ SUB-TASKS-TWO
export const getSubTasksThreeBySubTaskId = async (subTaskTwoId: any) => {
    return (await todosApi.get(`/sub-tasks-three/?subTaskTwoId=${subTaskTwoId}`))
}












// =========================================================
// UNIVERSAL FUNCTIONS
// =========================================================
export const getAllEmbededLists = async () => {
    return (await todosApi.get(`/lists?_embed=tasks`)).data
}

export const getContentData = async (listId: any) => {
    return (await todosApi.get(`/lists/${listId}?_embed=tasks`)).data
}




const timestamp = new Date().getTime();
const dateObject = new Date(timestamp);
const hours = dateObject.getHours().toString().padStart(2, '0');
const minutes = dateObject.getMinutes().toString().padStart(2, '0');
const seconds = dateObject.getSeconds().toString().padStart(2, '0');
const formattedTime = `${hours}:${minutes}:${seconds}`;

todosApi.interceptors.request.use(
    config => {
        console.log(`${config.method?.toUpperCase()} request sent to ${config.url} at ${formattedTime}`);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default todosApi;