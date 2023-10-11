// import { createAlova } from "alova";
// import GlobalFetch from "alova/GlobalFetch";
// import ReactHook from "alova/react";

// const alovaInstance = createAlova({ baseURL,
//   statesHook: ReactHook,
//   requestAdapter: GlobalFetch(),
//   responsed: (response) => response.json()
// });

const baseURL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  // const response = await alovaInstance.Get(`/users`)
  const response = await fetch(`${baseURL}/users`);
  const result = await response.json();
  return result
};

