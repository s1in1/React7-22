import React from 'react'
import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import styles from '../Header/Header.module.css'

export const Header = () => {
  return (
    <>
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <h1><a>SAFQ</a></h1>
            </div>
            
            <div >
                <ul className={styles.header__menu}>
                    <li><a>Главная</a></li>
                    <li><a>Каталог</a></li>
                    <li><a>О нас</a></li>
                </ul>
            </div>
            <div className={styles.header__cart}>
                <button className={styles.button}><ShoppingBagIcon className='size-6 text-black '></ShoppingBagIcon></button>
            </div>

        </header>
    </>
  )
}