import { createList, createSubTask, createSubTaskThree, createSubTaskTwo, createTask, deleteList, getAllEmbededLists, getLists, getSubTasksByTaskId, getSubTasksThreeBySubTaskId, getSubTasksTwoBySubTaskId, getTasksByListId, toggleTaskCompletion } from "@/lib/todosApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ================================================
// COMMON QUERIES AND MUTATIONS
// ================================================


// ================================================
// LISTS 
// ================================================
// create list 
export const useCreateList = () => useMutation({
    mutationFn: (payload: any) => createList(payload)
});

// read lists 
export const useGetLists = () => useQuery({
    queryKey: ['lists'],
    queryFn: () => getLists(),
    staleTime: 60000
});

// delete list 
export const useDeleteList = () => useMutation({
    mutationFn: (id: any) => deleteList(id)
});

// ================================================
// TASKS 
// ================================================
// create task
export const useCreateTask = () => useMutation({
    mutationFn: (payload: any) => createTask(payload)
});

// read task
export const useGetTasksByListId = (listId: number | null) => useQuery({
    queryKey: ['tasks', listId],
    queryFn: () => getTasksByListId(listId),
    staleTime: 60000
    // enabled: !!listId,
});

// Toggle task - (complete)
export const useToggleTaskCompletion = (taskId: number, completed: boolean) => useMutation({
    mutationFn: () => toggleTaskCompletion(taskId, completed)
});

// delete task
export const useDeleteTask = () => useMutation({
    mutationFn: (payload: any) => createTask(payload)
});

// ================================================
// SUB-TASKS 
// ================================================
// create sub-task
export const useCreateSubTask = () => useMutation({
    mutationFn: (payload: any) => createSubTask(payload)
});

// read sub-task
export const useGetSubTasksByTaskId = (taskId: number | null) => useQuery({
    queryKey: ['sub-tasks', taskId],
    queryFn: () => getSubTasksByTaskId(taskId),
    staleTime: 60000
    // enabled: !!listId,
});

// ================================================
// SUB-TASKS-TWO
// ================================================
// create sub-task
export const useCreateSubTaskTwo = () => useMutation({
    mutationFn: (payload: any) => createSubTaskTwo(payload)
});

// read sub-task
export const useGetSubTasksTwoByTaskId = (subTaskId: number | null) => useQuery({
    queryKey: ['sub-tasks-two', subTaskId],
    queryFn: () => getSubTasksTwoBySubTaskId(subTaskId),
    staleTime: 60000
    // enabled: !!listId,
});

// ================================================
// SUB-TASKS-TWO
// ================================================
// create sub-task
export const useCreateSubTaskThree = () => useMutation({
    mutationFn: (payload: any) => createSubTaskThree(payload)
});

// read sub-task
export const useGetSubTasksThreeByTaskId = (subTaskTwoId: number | null) => useQuery({
    queryKey: ['sub-tasks-three', subTaskTwoId],
    queryFn: () => getSubTasksThreeBySubTaskId(subTaskTwoId),
    staleTime: 60000
    // enabled: !!listId,
});