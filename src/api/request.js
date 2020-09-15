import axios from "axios";

// Creating an axios instance with default properties
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: " Client-ID -x0bNOzYE0mp5NkBidaLyEcOB18zGzbKjMAXUXtvBTM",
  },
});
