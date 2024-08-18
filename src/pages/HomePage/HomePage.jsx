import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Contact book </h1>
      <p className={css.text}>
        which of your friends 
        really brave?
      </p>
    </div>
  );
}