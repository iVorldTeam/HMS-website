import React, { useState } from 'react'

const AddProduct = () => {
  const [addProduct, setaddProduct] = useState({ pname: "", pprice: "", pquan: "", pdesc: "", image: "" })
  const addProductFunc = () => {
    const formData = new FormData()
    formData.append("pname", addProduct.pname)
    formData.append("price", addProduct.pprice)
    formData.append("quantity", addProduct.pquan)
    formData.append("desc", addProduct.pdesc)
    formData.append("image", addProduct.image)
    fetch("http://localhost:3000/api/products/addProduct", {
      method: "POST",
      body: formData,
      credentials: "include"
    })
  }
  return (
    <div>
      <input type="text" name='pname' onChange={(e) => { setaddProduct({ ...addProduct, [e.target.name]: e.target.value }) }} />
      <input type="text" name='pprice' onChange={(e) => { setaddProduct({ ...addProduct, [e.target.name]: e.target.value }) }} />
      <input type="text" name='pquan' onChange={(e) => { setaddProduct({ ...addProduct, [e.target.name]: e.target.value }) }} />
      <input type="text" name='pdesc' onChange={(e) => { setaddProduct({ ...addProduct, [e.target.name]: e.target.value }) }} />
      <input type="file" name="image" onChange={(e) => { setaddProduct({ ...addProduct, [e.target.name]: e.target.files[0] }) }} id="" />
      <button onClick={addProductFunc}>ADD PRODUCT</button>
    </div>
  )
}

export default AddProduct
