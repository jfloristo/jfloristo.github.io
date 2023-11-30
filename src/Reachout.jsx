import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import './scss/styles.scss'

import Bio from './homepage/Bio';

export default function Reachout() {
  return (
    <main className='primary container positio-relative middle center'>
      <h1>Reach Out</h1>
      <div className='container primary'>
        <div>
          <a href="https://www.facebook.com/jfloristo" target="_blank" rel="noopener noreferrer">
            <div className='container-row center'>
              <FaFacebook /><h4>Facebook</h4>
            </div>
          </a>
          <a href="https://www.twitter.com/jfloristo" target="_blank" rel="noopener noreferrer">
          <div className='container-row center'>
            <FaTwitter /><h4>Twitter</h4>
          </div>
          </a>
          <a href="https://www.instagram.com/jfloristo" target="_blank" rel="noopener noreferrer">
          <div className='container-row center'>
            <FaInstagram /><h4>Instagram</h4>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/jfloristo1/" target="_blank" rel="noopener noreferrer">
          <div className='container-row center'>
            <FaLinkedin /><h4>LinkedIn</h4>
          </div>
          </a>
          <a href="mailto:johnivanloristo769@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className='container-row center'>
            <FaEnvelope /><h4>Send an email</h4>
          </div>
          </a>
        </div>
      </div>
    </main>
  )
}
