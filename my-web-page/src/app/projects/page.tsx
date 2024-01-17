import Image from 'next/image';
import { ReactNode } from 'react';

// Define a type for a project
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrls?: string[]; // Optional pictures
  videoUrl?: string; // Optional video URL
};

// Define the projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Full Stack Web Application",
    description: 'Local Made – a full-stack application developed in a span of three months – is designed to connect local artists and clients for commissioned pieces. Using the Next.js framework in TypeScript and Supabase for robust data storage and authentication, the app ensures a seamless user experience. Artists can showcase their work on the main public page, and the platform allows for artist-specific login and signup with email verification. The user account page enables profile customization, post creation, and privacy settings, giving users control over their public visibility. With a user-friendly interface and efficient navigation, Local Made serves as a powerful tool for facilitating connections between local artists and clients. The application is hosted through Vercel.',
    imageUrls: ['/project1-1.png', '/project1-2.png', '/project1-3.png', '/project1-4.png'],
  },
  {
    id: 2,
    title: 'Mobile Applications',
    description: "I've developed several Flutter apps using Dart, each tailored for specific functionalities. These projects demonstrate my proficiency in Flutter and Dart, following standard practices and the Flutter framework principles. The code is organized with a focus on modularity and clean design patterns. Leveraging Flutter's widget library, I've created dynamic interfaces, incorporating features like ListView widgets for content display. The apps include interactive elements such as onTap functionalities and AlertDialogs for user experiences. Additionally, images, tabs, and various UI components are integrated to enhance visual appeal. The design prioritizes usability, ensuring clarity and consistency throughout the user interface.",
    imageUrls: ['/project2-2.png', '/project2-3.png', '/project2-4.png'],
    videoUrl: '/project2-1.mov'
  },
  {
    id: 3,
    title: 'IoT - Bluetooth Utility Cart',
    description: "This project centers around a wireless remote-controlled cart equipped with three Arduino subsystems. The purpose of the three-subsystem makeup is to practice communication between separate systems. The subsystems communicate through wired connections using the I2C method, and the cart is controlled via a mobile application using an HC-05 Bluetooth module. Subsystem 1 manages the cart's motors and controls, enabling movement in any direction. Subsystem 2, the proximity detector, employs an ultrasonic sensor to detect obstacles in front of the cart, triggering a beeping noise and displaying a message on an LCD screen. If an object is detected, it is relayed to Subsystem 1, and the cart will only be able to move in reverse until it is away from the object. Subsystem 3, the force detector, uses force resistors to determine the weight of the load. If the weight exceeds a limit, the cart becomes immobile, displaying a 'Too heavy' message on the LCD. If the weight exceeds the limit, it is relayed back to Subsystem 1, and the cart will not move.",
    videoUrl: '/project3-video.MOV',
  },
  {
    id: 4,
    title: 'Wearable Devices - Wearable Smart Shoe Insole for Gait Analysis',
    description: "In collaboration with a team, we developed a Smart Shoe Insole for precise tracking and evaluation of users' walking and running patterns, identifying foot gait abnormalities. Utilizing four Force Sensitive Resistors (FSRs) and the MPU-6050 (GY-521) Accelerometer, our device ensures accurate data collection on force exertion and orientation (X, Y, and Z axes). Concealed within athletic slides, the hardware offers a comfortable, slide-on design. The user interface includes Gait Analysis, Movement Analysis, and Balance Assistant modes, providing a comprehensive understanding of gait dynamics with live sensor readings, foot outlines, and informative bar charts. Our Wearable Smart Shoe Insole caters to diverse user groups interested in enhancing their foot gait analysis.",
    imageUrls: ['/project4-1.png', '/project4-2.png'],
  },
  {
    id: 5,
    title: 'Python Command Line Interface (CLI) Movie Data Lookup',
    description: "This Python application utilizes SQLite to provide a command-line interface for accessing a movie information database. Key functionalities include searching for movies, retrieving detailed movie information, listing top-rated movies, inserting reviews, and managing movie taglines. The project showcases effective collaboration between presentation, object, and data tiers, offering a straightforward tool for movie data lookup.",
    imageUrls: ['/project5-1.png', '/project5-2.png', '/project5-3.png', '/project5-4.png'],
  },
];

const ProjectBox: React.FC<Project> = ({ title, description, imageUrls, videoUrl, id }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-screen-xl mx-auto">
    <h1 className="text-black font-bold mb-3">{title}</h1>
    <p className="text-black text-lg mb-4">{description}</p>
    <div className="flex flex-wrap justify-center mb-4">
      {imageUrls && imageUrls.length > 0 && (
        <>
          {imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`${title} - Image ${index + 1}`}
              width={(id === 2) ? 300 : ((id === 5) ? 400 : 400)}
              height={(id === 2) ? 200 : ((id === 5) ? 200 : 300)}
              className="rounded-md mx-2 mb-2"
            />
          ))}
        </>
      )}
    </div>
    {videoUrl && (
      <video controls width={300} height={200} className="rounded-md mx-auto mb-4">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
);


const ProjectPage: React.FC = () => (
  <main className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      {projects.map((project) => (
        <ProjectBox key={project.id} {...project} />
      ))}
    </div>
  </main>
);

export default ProjectPage;

