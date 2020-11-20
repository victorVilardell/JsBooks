import axios from "axios";
import getBooksFromItBooks from "./factory";

export default (category) => getBooksFromItBooks(axios, category);
