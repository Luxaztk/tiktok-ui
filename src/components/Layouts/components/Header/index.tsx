import className from 'classnames/bind';
import style from './Header.module.scss';

const cx = className.bind(style);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>{}</div>
    </header>
  );
}

export default Header;
