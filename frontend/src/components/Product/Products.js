import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [anime, setAnime] = useState("");

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const categories = [
    "Asset Management",
    "Student",
    "Basic Finances",
    "Banking Related",
    "Blockchain",
  ];

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  let count = filteredProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5 p-4 border rounded-lg">
              <Typography>Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />

              <Typography>Categories</Typography>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li
                    className={`cursor-pointer ${
                      cat === category ? "font-semibold" : ""
                    }`}
                    key={cat}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>

              <fieldset>
                <Typography component="legend">Ratings Above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                />
              </fieldset>
            </div>
            <div className="md:w-4/5 p-4">
              <h2 className="text-2xl font-semibold mb-4">Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
              {resultPerPage < count && (
                <div className="mt-4">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={filteredProductsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
