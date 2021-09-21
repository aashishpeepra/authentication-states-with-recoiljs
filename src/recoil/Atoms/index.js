// default place for Atoms

import { atom } from "recoil";

export const user_creds = atom({
  key: "userCreds",
  default: {},
});

export const user_data = atom({
  key: "userData",
  default: {
    posts: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3JpbmFnYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3JpbmFnYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3JpbmFnYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3JpbmFnYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3JpbmFnYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    ],
  },
});
