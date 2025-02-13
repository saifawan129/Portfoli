"use client"; // Required for Next.js 13+ App Router

import { useState } from "react";

function Section() {
  const [activeTab, setActiveTab] = useState("intro");

  const content = {
    intro: `
      <p>
        Hey there!<br><br> I'm <strong>Saif Ur Rehman</strong>, and I've been fascinated by computers since I was young.
        I’ve been working in web development for over 2 years 
        (and if you count the sleepless nights, it’s easily 3! 😄) doing both 
        <strong> frontend </strong> (The stuff you see on the screen) and 
        <strong> backend </strong> (The stuff that happens behind the scenes).<br>
        I love experimenting with the <strong>latest web technologies</strong> 
        and continuously strive to improve my skills and knowledge. 
        <br><br>I am also a strong <strong>communicator</strong>, capable of effectively collaborating with 
        clients and team members to understand their needs and translate them into functional specifications.<br><br>
        My journey in tech started with self-learning and online courses, which led me to gain hands-on experience
        in <strong>JavaScript, React, and Next.js</strong>. I'm always eager to expand my knowledge and stay updated with the latest trends.
      </p>
    `,
    Education: `
      <div class="w-full rounded-xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-3 sm:p-5 bg-[#1C1C1C] border border-dashed border-green-500">
        <div class="flex flex-col sm:flex-row justify-between w-full">
          <div class="h-[60px] w-[60px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbiOw54QBe1DbGjXKPLVHglrEnsyCEZp5LK0h0fkRLwl-73fgCCYoZxhEuyQ5qOkOef4&usqp=CAU" alt="" class="h-full w-full object-cover rounded-md">
          </div>
          <div class="flex flex-col gap-1 w-[70%]">
            <h4 class="text-white font-medium">Bachelor in Business Administration </h4>
            <p class="text-gray-500 text-sm">Bahria University islamabad </p>
            <p class="text-gray-500 text-sm">islamabad, Pakistan</p>
          </div>
          <div class="flex flex-col items-end gap-1">
            <h4 class="text-white font-medium">2022 - 2026</h4>
          </div>
        </div>
      </div>
      <div class="w-full rounded-xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-3 sm:p-5 bg-[#1C1C1C] border border-dashed border-green-500">
        <div class="flex flex-col sm:flex-row justify-between w-full">
          <div class="h-[60px] w-[60px]">
            <img src="data:image/png;base64,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" alt="" class="h-full w-full object-cover rounded-md">
          </div>
          <div class="flex flex-col gap-1 w-[70%]">
            <h4 class="text-white font-medium"> Computer Science</h4>
            <p class="text-gray-500 text-sm">PGC islamabad</p>
            <p class="text-gray-500 text-sm">islamabad, Pakistan</p>
          </div>
          <div class="flex flex-col items-end gap-1">
            <h4 class="text-white font-medium">2020 - 2022</h4>
          </div>
        </div>
      </div>
      <div class="w-full rounded-xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-3 sm:p-5 bg-[#1C1C1C] border border-dashed border-green-500">
        <div class="flex flex-col sm:flex-row justify-between w-full">
          <div class="h-[60px] w-[60px]">
            <img src="/app/public/asas.png" alt="" class="h-full w-full object-cover rounded-md">
          </div>
          <div class="flex flex-col gap-1 w-[70%]">
            <h4 class="text-white font-medium"> Computer Science </h4>
            <p class="text-gray-500 text-sm">IMCB f-10/3 </p>
            <p class="text-gray-500 text-sm">islamabad, Pakistan</p>
          </div>
          <div class="flex flex-col items-end gap-1">
            <h4 class="text-white font-medium">2022 - 2026</h4>
          </div>
        </div>
      </div>
    `,
    Career:   ` <div class="w-full rounded-xl flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 p-3 sm:p-5 bg-[#1C1C1C] border border-dashed border-green-500">
    <div class="flex flex-col sm:flex-row justify-between w-full">
      <div class="h-[60px] w-[60px]">
        <img src="https://ace.org.pk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/05/cropped-goldLogo.png.webp" alt="" class="h-full w-full object-cover rounded-md">
      </div>
      <div class="flex flex-col gap-1 w-[70%]">
        <h4 class="text-white font-medium"> Front-end developement </h4>
        <p class="text-gray-500 text-sm">ACE institute </p>
        <p class="text-gray-500 text-sm">islamabad, Pakistan</p>
      </div>
      <div class="flex flex-col items-end gap-1">
        <h4 class="text-white font-medium">2024</h4>
      </div>
    </div>
  </div>`,
    resume: `<div class="bg-[#1C1C1C] p-8 font-sans text-gray-800">
      
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-blue-600">Saif Ur Rehman</h1>
        <h2 class="text-2xl font-semibold text-white">MERN Stack Developer</h2>
        <p class="text-white">Hustlesaifs@gmail.com | +92 3171060882 | Pakistan, Islamabad</p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-4">PROFILE</h3>
        <p class="text-white leading-relaxed">
          I am a full-stack web developer specializing in the MERN stack, Next.js, and React, with expertise in Tailwind CSS and TypeScript. With a proven track record of delivering robust web apps, I aim to contribute to innovative projects that challenge my skills and foster professional growth.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-4">EXPERIENCE</h3>
        <div class="bg-[#1C1C1C] p-6 rounded-lg shadow-md">
          <h4 class="text-xl font-semibold text-white">ACE Institute</h4>
          <p class="text-white text-sm mb-2">4-2024 to 6-2024</p>
          <ul class="list-disc list-inside text-white">
            <li>Managed and updated the ACE institute.org projects as a junior web development student for optimal performance.</li>
            <li>Worked alongside senior developers to refine web functionalities.</li>
            <li>Contributed to the development and implementation of new website features.</li>
            <li>Monitored students in web development techniques and best practices.</li>
          </ul>
        </div>
      </div>

      
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-4">EDUCATION</h3>
        <div class="bg-[#1C1C1C] p-6 rounded-lg shadow-md">
          <h4 class="text-xl font-semibold text-white">Bachelor in Business Administration</h4>
          <p class="text-white text-sm mb-2">Bahria University, Islamabad, Pakistan (2022-2026)</p>

          <h4 class="text-xl font-semibold text-white mt-4">Intermediate in Computer Science</h4>
          <p class="text-white text-sm mb-2">Pgc College, Islamabad, Pakistan (2020-2022)</p>

          <h4 class="text-xl font-semibold text-white mt-4">Matric in Computer Science</h4>
          <p class="text-white text-sm mb-2">IMCB F-10, Islamabad, Pakistan (2018-2020)</p>
        </div>
      </div>

      
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-4">TECHNICAL SKILLS</h3>
        <div class="bg-[#1C1C1C] p-6 rounded-lg shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h4 class="text-lg font-semibold text-white">Languages</h4>
              <p class="text-white">JavaScript, TypeScript, C++, HTML, EJS</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Styles</h4>
              <p class="text-white">CSS, SCSS, Bootstrap, Tailwind CSS, MUI, ShadCn</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Libraries</h4>
              <p class="text-white">ReactJs, ExpressJs, GSAP, Redux Toolkit</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Runtime</h4>
              <p class="text-white">NodeJs</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Database</h4>
              <p class="text-white">MongoDB, PostgreSQL, SQLite</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">BAAS</h4>
              <p class="text-white">Supabase, Firebase, Appwrite</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Payments</h4>
              <p class="text-white">Stripe</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Framework</h4>
              <p class="text-white">Nextjs</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">CMS</h4>
              <p class="text-white">Strapi</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">DevTools</h4>
              <p class="text-white">Git, GitHub, Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="grid xl:grid-cols-2 gap-10 p-10">
        {/* Left Image */}
        <div className="flex justify-start items-center">
          <img src="https://saifurrehman.info/Robot%20arm-cuate.png" alt="About Me" className="w-150 h-150 object-cover" />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <h1 className=" text-2xl font-bold text-green-600">About Me</h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-3xl transition duration-300 ${
                  activeTab === key ? "bg-black text-white " : "bg-green-600  text-white hover:bg-black"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="mt-4 p-4 bg-gray-800 text-white rounded">
            <div dangerouslySetInnerHTML={{ __html: content[activeTab] }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;