import styled from "styled-components";
import { connect } from "react-redux";
import { useMemo } from "react";
import { useCallback } from "react";
import { setChosenId } from '../actions/productActions'
import PropTypes from "prop-types";

function Product(props) {
  const { id, name, inStock, setChosenId, chosenId, image } = props;

  const checkPrimary = useCallback(chosenId => {
    if (id === chosenId) {
      return "primary";
    } else {
      return "regular";
    }
  }, [id])

  const color = useMemo(() => checkPrimary(chosenId), [checkPrimary, chosenId]);

  const clickHandler = () => {
    if(color === 'primary') {
      return
    }

    setChosenId(id);
  };



  return (
    <Wrapper primary={color} onClick={clickHandler}>
      <div className="products">
        <div className="container">
          <img src={image} alt={name} />
        </div>
        <footer>
          <p>{name}</p>
          <p>ID: {id}</p>
          <p>{inStock ? "Available" : "Out Of Stock"}</p>
        </footer>
      </div>
    </Wrapper>
  );
}

Product.propTypes = {
  setChosenId: PropTypes.func.isRequired,
  chosenId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  chosenId: state.products.chosenId,
});

export default connect(mapStateToProps, { setChosenId })(Product);

const Wrapper = styled.div`
  .products {
    border: ${(props) =>
      props.primary === "primary"
        ? "0.7px solid black"
        : "0.7px solid rgb(168, 97, 16)"};
    border-radius: var(--radius);

    color: ${(props) =>
      props.primary === "primary" ? "black" : "rgb(168, 97, 16)"};
    border-radius: var(--radius);

    text-shadow: ${(props) =>
      props.primary === "primary" ? "0.4px 0.4px black" : "0.4px 0.4px black"};
  }

  .container {
    position: relative;
    border-radius: var(--radius);
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;

    border-bottom: ${(props) =>
      props.primary === "primary"
        ? "1px solid black"
        : "1px solid rgb(237, 162, 71)"};

    border-radius: var(--radius);
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.8rem;
    border-radius: var(--radius);
    transition: var(--transition);

    background-image: ${(props) =>
      props.primary === "primary"
        ? "linear-gradient(to bottom right, rgb(247, 207, 155), rgb(242, 172, 82));"
        : "linear-gradient(to bottom right, rgb(239, 235, 230), rgb(237, 223, 206))"};
    transition: var(--transition);
  }

  footer h5,
  footer p {
    font-weight: 500;
  }

  footer p {
    letter-spacing: var(--spacing);
  }
`;
