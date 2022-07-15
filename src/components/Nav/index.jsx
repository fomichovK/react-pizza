import './nav.scss';

export default function Nav({ activIndex, setActivIndex }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытие'];

  return (
    <div className='nav'>
      <div className='navButtons'>
        {categories.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => setActivIndex(i)}
              className={activIndex === i ? 'activ' : ''}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
