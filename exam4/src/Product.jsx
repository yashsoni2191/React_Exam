import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import v4 from "react-uuid";

function Product() {
  const [product, setProduct] = useState({
    id: v4(),
    productName: "",
    Price: "",
    Description: "",
    image: "",
  });

  const [edit, setEdit] = useState("");

  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit === "") {
      let obj = {
        ...product,
        id: v4(),
      };
      setArr([...arr, obj]);
      setProduct({
        productName: "",
        Price: "",
        Description: "",
        image: "",
      });
    } else {
      let a = arr.map((el) => {
        if (el.id == edit) {
          return { ...el, ...product };
        } else {
          return el;
        }
      });
      setArr(a);
      setEdit("");
      setProduct({
        productName: "",
        Price: "",
        Description: "",
        image: "",
      });
    }
  };

  const handleDelete = (deleteid) => {
    let a = arr.filter((el) => {
      if (el.id != deleteid) {
        return el;
      }
    });
    setArr(a);
  };

  const handleEdit = (Editid) => {
    setEdit(Editid);
    arr.forEach((el) => {
      if (el.id == Editid) {
        setProduct({ ...product, ...el });
      }
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Product Name</label>
        <br />
        <input
          type="text"
          id="product_name"
          name="productName"
          value={product.productName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Price</label>
        <br />
        <input
          type="text"
          id="Price"
          name="Price"
          value={product.Price}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Description</label>
        <br />
        <input
          type="text"
          id="Description"
          name="Description"
          value={product.Description}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Image</label>
        <br />
        <input
          type="text"
          id="image"
          name="image"
          value={product.image}
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value={edit == ""? "submit" : "edit"} />
      </form>
      <ProductList
        arr={arr}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Product;
