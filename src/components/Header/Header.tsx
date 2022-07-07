import s from "./header.module.css"

import React from "react";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="https://source.unsplash.com/800x800/?logo" alt="Odinokun's logo"/>
      </div>
    </header>
  )
}