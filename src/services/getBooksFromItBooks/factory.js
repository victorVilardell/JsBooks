import axios from "axios";
import getBooksFromItBooks from "./index";

export default (category) => getBooksFromItBooks(axios, category);
