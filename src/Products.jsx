export const Products = ({ img, title, description, price }) => {
  return (
    <>
      <img src={img} alt="producto 1" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>$ {price}</p>
    </>
  );
};
