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


export interface ITaskListState {
  isLoading: boolean;
  taskData: ITaskState[];
}
