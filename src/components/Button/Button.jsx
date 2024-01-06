import css from './button.module.css';

const Button = () => {
  return (
    <button type="submit" className={css.button}>
      Load more
    </button>
  );
};

export default Button;
