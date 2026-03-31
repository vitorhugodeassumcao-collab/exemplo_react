import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function footer() {

  return (
    <>
    <header>
      <h1>exemplo 67 de react</h1>
    </header>

    <section>
      <h2 id='exempl h2'>seccao de listas 910</h2>

      <h3>listas n ordenada</h3>
      <ul id='ul'>
        <li>batata</li>
        <li>pao</li>
        <li>arroz</li>
      </ul>

    <h3>listas ordenada</h3>
    <ol>
      <li>city boy</li>
      <li>charlie kirk</li>
      <li>lebron jaime</li>
    </ol>

    </section>

    <footer id='footer' ></footer>
    <p>minha primeira API React - &copy;
      todos os diretos reservados a vitor ass </p>

    </>
  )

}

export default footer
