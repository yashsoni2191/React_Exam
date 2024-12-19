import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    productName: "",
    Price: "",
    Category: "",
    Description: "",
    File: null,
  });

  const [error, setError] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setformData({ ...formData, File: e.target.files[0] });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.productName || formData.productName.length < 3) {
      validationErrors.productName = "Product must be at least 3 characters";
    }
    if (!formData.Price || isNaN(formData.Price) || formData.productName <= 0) {
      validationErrors.Price = "Price should be positive number";
    }
    if (!formData.Category) {
      validationErrors.Category = "Category is required";
    }
    if (!formData.Description && formData.Description.length > 200) {
      validationErrors.Description = "Description must exceed 200 characters";
    }
    if (!formData.File) {
      validationErrors.File = "Product iamge us required";
    } else if (
      formData.File &&
      !["image/jpeg, image/png"].includes(formData.File.type)
    ) {
      validationErrors.File = "Only Image file is allowed";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({
        productName: formData.productName,
        Price: formData.Price,
        Category: formData.Category,
        Description: formData.Description,
        File: formData.File.name,
      });
      setisSubmitted(true);
    } else {
      setisSubmitted(false);
    }
  };

  const isFormValid = Object.keys(validate()).length === 0;

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={formData.productName}
            placeholder="Product Name"
            name="productName"
            onChange={handleInputChange}
          />
          {error.productName && <small>{error.productName}</small>}
        </div>
        <div>
          <input
            type="text"
            value={formData.Price}
            placeholder="Price"
            name="Price"
            onChange={handleInputChange}
          />
          {error.Price && <small>{error.Price}</small>}
        </div>
        <div>
          <select
            name="Category"
            value={formData.Category}
            id=""
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="Electonics">Electronics</option>
            <option value="Clothes">CLothes</option>
            <option value="Grocery">Grocery</option>
            <option value="Books">Books</option>
          </select>
          {error.Category && <small>{error.Category}</small>}
        </div>
        <div>
          <input
            type="text"
            value={formData.Description}
            placeholder="Description"
            name="Description"
            onChange={handleInputChange}
          />
          {error.Description && <small>{error.Description}</small>}
        </div>
        <div>
          <input
            type="file"
            placeholder="Product Image"
            name="File"
            onChange={handleFileChange}
            accept=".jpeg , .jpg, .png"
          />
          {error.File && <small>{error.File}</small>}
        </div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {isSubmitted && <p>Product Registered Successfully</p>}
    </div>
  );
}

export default App;
