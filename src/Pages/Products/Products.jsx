import Product from "./Product"


const Products = () => {
  return (

    <div className="max-w-7xl md:my-20 my-10 md:mx-auto mx-5">
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-y-10">

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        
      </div>
    </div>
  )
}

export default Products