import axios from "axios";
import getBooksFromOpenLibra from "./index";

export default (category) => getBooksFromOpenLibra(category, axios);
