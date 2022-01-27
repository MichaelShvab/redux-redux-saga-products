import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import styled from "styled-components";

const Products = (props) => {
  const { fetchProducts, items, loading } = props;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <Wrapper>
        <div className="loading"></div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <h1>Products</h1>
        <div className="underline" />
        <div className="products-container">
          {items.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <h5>{items.length} Products Found</h5>
      </div>
    </Wrapper>
  );
};

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.products.items,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { fetchProducts })(Products);

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    width: 90%;
    max-width: 100rem;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .underline {
    width: 11rem;
    margin-bottom: 4rem;
    height: 0.25rem;
    background: rgb(242, 172, 82);
    margin-left: auto;
    box-shadow: 0.3px 0.3px black;
    margin-right: auto;
  }

  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  h1 {
    font-size: 45px;
    color: rgb(168, 97, 16);
    text-shadow: 0.4px 0.4px black;
    margin-bottom: 0.3rem;
  }

  h5 {
    color: rgb(168, 97, 16);
    text-shadow: 0.4px 0.4px black;
  }

  .loading {
    display: flex;
    justify-content: center;
    margin: 20rem 2rem 2rem 2rem;
  }

  .loading::after {
    content: "";
    width: 70px;
    height: 70px;
    border: 10px solid #dddddd;
    border-top-color: rgb(242, 172, 82);
    border-radius: 50%;
    animation: spin 0.8s 0.1s ease-in-out infinite both;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
