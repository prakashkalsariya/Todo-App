export interface IDeleteUser {
  payload: {
    _id: string;
    title: string;
    isOpen: boolean;
  };
}



export interface IViewUser {
  payload: {
    isOpen: boolean;
    title: string;
    description: string;
    date: string;
    time: string;
    _id: string;
  };
}
