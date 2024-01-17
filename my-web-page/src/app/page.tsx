import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
      <Image
          src="/profile_pic.png"
          alt="Emily O'Heron"
          width={135}
          height={235}
          className="w-35 h-35 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Emily O&apos;Heron</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Computer Science Enthusiast</p>
        <div className="text-left">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-800 dark:text-gray-200 mb-6">
            I am a December 2023 graduate of the University of Illinois at Chicago College of Engineering with a degree in Computer Science. Throughout my academic journey, I have honed my skills in object-oriented programming, GUI and backend development, and completed hands-on projects that demonstrate my ability to solve complex problems and create efficient solutions.<br/><br/>
            
            My internship experiences in robotic process automation and test automation engineering have exposed me to real-world applications of computer science, allowing me to collaborate effectively in a team-oriented environment. What sets me apart is not only my technical proficiency but also my passion for continuous learning and adaptability. I have demonstrated a high capacity to rapidly learn and apply new concepts, technologies, and methodologies.<br/><br/>
            
            I am eager to contribute my skills to a dynamic team, where I can further develop my abilities as a computer science professional while making meaningful contributions to innovative projects.<br/><br/>

            I enjoy a variety of hobbies and am always open to trying new ones. I like interior design, being creative, baking, and cooking up healthy meals. I also like to stay active and find joy in yoga, pilates, and being outside. Family is important to me, and I value spending quality time with them, often accompanied by my energetic golden doodle! My family and friends would describe me as adventurous, interpersonal, energetic, and easy-going.
          </p>
          <h2 className="text-xl font-semibold mb-4"> Self Description</h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mb-6">
            <li>Adaptive learner</li>
            <li>Problem solver</li>
            <li>Curious</li>
            <li>Creative</li>
            <li>Team player</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4"> Technical Skills</h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mb-6">
            <li>React.js and Next.js</li>
            <li>Python</li>
            <li>SQL (MySQL, SQLite)</li>
            <li>JavaScript</li>
            <li>Flutter (Dart)</li>
            <li>Auth, OAUTH, APIs</li>
            <li>IoT (Arduino, Wearable Technology)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

