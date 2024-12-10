import { useState } from "react";
import "./App.css";

function ProductRegistrationForm() {
  const [formData, setformData] = useState({
    product: "",
    price: "",
    category: "",
    description: "",
    productImage: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);

  const validate = () => {
    let validationErrors = {};

    if (!formData.product || formData.product.length < 3) {
      validationErrors.product =
        "Product name is required and must be at least 3 characters.";
    }

    if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
      validationErrors.price = "Price must be a positive number.";
    }

    if (!formData.category) {
      validationErrors.category = "Category is required.";
    }

    if (formData.description && formData.description.length > 200) {
      validationErrors.description =
        "Description must not exceed 200 characters.";
    }

    if (!formData.productImage) {
      validationErrors.productImage = "Product image is required.";
    } else if (
      formData.productImage &&
      !["image/jpeg", "image/png"].includes(formData.productImage.type)
    ) {
      validationErrors.productImage = "Only JPEG and PNG files are allowed.";
    }

    return validationErrors;
  };

  const handeInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setformData({ ...formData, productImage: e.target.files[0] });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      console.log({
        product: formData.product,
        price: formData.price,
        category: formData.category,
        description: formData.description,
        productImage: formData.productImage.name,
      });
      setisSubmitted(true);
    } else {
      setisSubmitted(false);
    }
  };

  const isFormValid = Object.keys(validate()).length == 0;

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <div>
          <label>Product</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            placeholder="Product Name"
            onChange={handeInputChange}
            style={{
              borderColor: errors.product
                ? "red"
                : formData.product
                ? "green"
                : "",
            }}
          />
          {errors.product && (
            <small style={{ color: "red" }}>{errors.product}</small>
          )}
        </div>
        <br />
        <div>
          <label>Product Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            placeholder="Product Price"
            onChange={handeInputChange}
            style={{
              borderColor: errors.price ? "red" : formData.price ? "green" : "",
            }}
          />
          {errors.price && (
            <small style={{ color: "red" }}>{errors.price}</small>
          )}
        </div>
        <br />
        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handeInputChange}
            style={{
              borderColor: errors.category
                ? "red"
                : formData.category
                ? "green"
                : "",
            }}
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Groceries">Groceries</option>
            <option value="Books">Books</option>
          </select>
          {errors.category && (
            <small style={{ color: "red" }}>{errors.category}</small>
          )}
        </div>
        <br />
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handeInputChange}
            maxLength={200}
            style={{
              borderColor: errors.description
                ? "red"
                : formData.description
                ? "green"
                : "",
            }}
          />
          {errors.description && (
            <small style={{ color: "red" }}>{errors.description}</small>
          )}
        </div>
        <br />
        <div>
          <label>Product Image</label>
          <input
            type="file"
            name="productImage"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
            style={{
              borderColor: errors.productImage ? "red" : formData.productImage ? "green" : "",
            }}
          />
          {errors.productImage && <small style={{ color: "red" }}>{errors.productImage}</small>}
        </div>
        <br />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {isSubmitted && (
        <p style={{ color: "white", fontWeight : 'bold', marginTop : '10px' }}>Product Registered Successfully</p>
      )}
    </div>
  );
}

export default ProductRegistrationForm;
