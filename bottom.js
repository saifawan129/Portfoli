import React from 'react';

function Bottom() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {/* Project Trello */}
      <div className="bg-gray-800 rounded-xl m-4 group overflow-hidden">
        <img
          className="rounded-md my-5 group-hover:scale-110 transition-transform duration-700 object-cover cursor-pointer w-full h-48 sm:h-64"
          src="Trello.png"
          alt="Project Trello"
        />
        <h2 className="font-bold text-white text-2xl px-4">Project Trello</h2>
        <a className='border-white bg-black text-white px-4 block mt-2' href="http://saiffportfolio.freewebhostmost.com/">Click to Preview</a>
        <p className="text-sm text-gray-400 mt-2 px-4 capitalize">
          This is a project clone of Trello made by me
        </p>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">Created Trello's webpage using React</button>
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">React-Tailwind</button>
        </div>
      </div>

      {/* Todo List App */}
      <div className="bg-gray-800 rounded-xl m-4 group overflow-hidden">
        <img
          className="rounded-md my-5 group-hover:scale-110 transition-transform duration-700 object-cover cursor-pointer w-full h-48 sm:h-64"
          src="Todo.png"
          alt="Project Todo"
        />
        <h2 className="font-bold text-white text-2xl px-4">Todo List App</h2>
        <p className="text-sm text-gray-400 mt-2 px-4 capitalize">
          This is a project clone of Trello made by me
        </p>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">Created Todo List using React</button>
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">React-Tailwind-Nodejs</button>
        </div>
      </div>

      {/* Project Netflix Clone */}
      <div className="bg-gray-800 rounded-xl m-4 group overflow-hidden">
        <img
          className="rounded-md my-5 group-hover:scale-110 transition-transform duration-700 object-cover cursor-pointer w-full h-48 sm:h-64"
          src="Netflix.png"
          alt="Project Netflix"
        />
        <h2 className="font-bold text-white text-2xl px-4">Project Netflix Clone</h2>
        <p className="text-sm text-gray-400 mt-2 px-4 capitalize">
          This is a project clone of Trello made by me
        </p>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">Created Netflix's webpage using React</button>
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">React-Tailwind-SCSS</button>
        </div>
      </div>

      {/* Project Trello */}
      <div className="bg-gray-800 rounded-xl m-4 group overflow-hidden">
        <img
          className="rounded-md my-5 group-hover:scale-110 transition-transform duration-700 object-cover cursor-pointer w-full h-48 sm:h-64"
          src="Trello.png"
          alt="Project Trello"
        />
        <h2 className="font-bold text-white text-2xl px-4">Project Trello</h2>
        <p className="text-sm text-gray-400 mt-2 px-4 capitalize">
          This is a project clone of Trello made by me
        </p>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">Created Trello's webpage using React</button>
          <button className="rounded-xl text-white bg-green-600 px-4 py-2 text-sm sm:text-base">React-Tailwind</button>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
