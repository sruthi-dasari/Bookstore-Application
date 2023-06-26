import AllProductsSection from "../AllProductsSection";

import Header from "../Header";

import "./index.css";

const Products = () => {
  console.log("In Products page");
  return (
    <>
      <Header />
      <div className="product-sections">
        <AllProductsSection />
      </div>
    </>
  );
};

export default Products;
