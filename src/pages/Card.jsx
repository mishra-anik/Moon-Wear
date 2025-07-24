import { Link } from "react-router-dom";
import products from "../asset/products.json";
const Card = () => {

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("Adding to cart:", item);
  };


  return (
    <div className="product-list rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-[#ffe0f0] to-[#dbeafe] min-h-screen">
      {products.map((item) => (
        <div
          className="product-card w-full bg-white/80 backdrop-blur-md border border-pink-100 rounded-xl shadow-sm p-3 hover:shadow-md transition-all"
          key={item.id}
        >
          <Link to={`/product/details/${item.id}`}>
            <img
              src={item.img}
              alt={item.type}
              className="w-full h-[160px] object-cover rounded-md"
            />
          </Link>
          <h3 className="text-sm font-semibold text-gray-700 mt-2 leading-tight">
            {item.brand} - {item.type}
          </h3>
          <p className="text-pink-600 font-bold text-sm mt-1">₹{item.price}</p>
          <button onClick={() => addToCart(item)} className="mt-2 w-full bg-pink-500/80 text-white py-1 rounded text-sm hover:bg-pink-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
