export interface ITaskList {
  title: string;
  description: string;
  date: string;
  time: string;
  id: string;
}

export interface ITaskList {
  title: string;
  description: string;
  date: string;
  time: string;
  id: string;
}

export interface ITaskState {
  title: string;
  description: string;
  date: string;
  time: string;
  _id: string;
}

export interface ITaskData {
  title: string;
  description: string;
  date: string;
  time: string;
}
export interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface ITaskListState {
  isLoading: boolean;
  taskData: ITaskState[];
}
