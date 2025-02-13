"use client"
import React from 'react';
import { useState } from 'react';
import DynamicText from './Dynamictext'; // Adjust the import path as needed

function Main() {
  return (
    <div className='pl-10'>
      <br />
      <h2 className='text-2xl text-green-600'>Hi👋, I am</h2>
      <h1 className='font-bold text-6xl'>SAIF UR REHMAN</h1>
      <h2 className='text-green-600  '>
        <DynamicText />
      </h2>
      <br />
      <br />
      <p>🚀 A passionate Software Developer based in Islamabad, Pakistan</p>
      <p>Open to opportunities and freelance projects.</p>
      <p>
        🛠️ My main tech stack currently is <span className='text-green-600'>MERN</span> in combination with Tailwind CSS, TypeScript, and <span className='text-green-600'>Next.js</span>.
        <br />
        I specialize in building <span className='text-green-600'>Complex</span>, fast, and <span className='text-green-600'>Functional</span> digital products that deliver exceptional user experiences.
      </p>
    </div>
  );
}

export default Main;
