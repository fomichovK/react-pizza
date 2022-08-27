import './nav.scss';

type NavPropType = {
  activIndex: number;
  setActivIndex: (i: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытие'];

const Nav: React.FC<NavPropType> = ({ activIndex, setActivIndex }) => {
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
};
export default Nav;
