import { combineReducers } from "redux";
import GetProductReducer from "./GetProductReducer";
import ProductListReducer from "./ProductListReducer";
import CreateProductReducer from './CreateProductReducer'
//import PokemonMultipleReducer from "./PokemonMultipleReducer";
const rootReducer = combineReducers({
  ProductList: ProductListReducer,
  Product:GetProductReducer,
  CreateProduct:CreateProductReducer
  
});
export default rootReducer;
