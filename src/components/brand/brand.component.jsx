import "./brand.styles.scss";
const Brand = () => {
  return (
    <div className="brand-container">
      {window.innerWidth > 1024 ? (
        <div className="brand-desktop">Expenses</div>
      ) : (
        <div className="brand-mobile">E</div>
      )}
    </div>
  );
};
export default Brand;
