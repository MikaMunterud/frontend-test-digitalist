export default function ButtonLink({ className, handleClick, text }) {
  return (
    <button className={`${className} buttonLink`} onClick={handleClick}>
      {text}
    </button>
  );
}
