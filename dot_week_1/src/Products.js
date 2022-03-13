import data_home from "./home_data";
import Product from "./Product";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAllProducts } from "./actions/productAction";
import { motion } from "framer-motion";
const Products = () => {
  const [selectedId, setSelectedId] = useState(null);

  const { products } = useSelector((state) => state.productReducer);
  return (
    <motion.div
      className="container mt-5"
      animate={{ y: 30 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="row">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
};
export default Products;
