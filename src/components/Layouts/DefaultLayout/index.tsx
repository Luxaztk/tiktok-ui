import classNames from 'classnames/bind';
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
