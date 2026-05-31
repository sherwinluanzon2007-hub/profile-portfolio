
import { Routes, Route, Link } from "react-router-dom";
import Story from "./Story";
export default function App() {
  const playStoryMusic = () => {
  const audio = new Audio("/music/Story.mp3");
  audio.play();

  sessionStorage.setItem("playStoryMusic", "true");
};

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-stone-100 text-neutral-900 font-serif">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white px-10 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-widest">
          PORTFOLIO
        </h1>

        <div className="space-x-8 hidden md:flex">
          <a href="#home" className="hover:text-pink-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-pink-400 transition">
            About
          </a>

          <a href="#story" className="hover:text-pink-400 transition">
            Story
          </a>

          <a href="#projects" className="hover:text-pink-400 transition">
            Project
          </a>

          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <img
          src="/image/7.7.jpg"
          alt="7.7"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="relative z-10 text-center px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-white mb-4">
            Leadership Portfolio of
          </p>

          <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight">
            Sherwin G. Luanzon
          </h1>

          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-white text-2xl leading-relaxed">
              "Leadership is not about being the loudest voice in the room. Like
              <span className="font-semibold"> SHERWIN</span>,
              <span className="italic text-pink-400 font-bold">
                {" "}I choose to SHERve with humility, WIN with integrity,
                and inspire others through action.
              </span>"
            </p>
          </div>

          <a
            href="#about"
            className="inline-block mt-10 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition duration-300 uppercase tracking-widest text-sm"
          >
            Explore More
          </a>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
      
        <div>
          <p className="uppercase tracking-[0.3em] text-sm font-bold text-neutral-500 mb-5">
            My Background in Leadership
          </p>

          <ul className="text-lg leading-5 text-neutral-700 space-y-2 list-disc pl-6">
            <li>Grade 5 P.O</li>
            <li>Grade 6 Treasurer</li>
            <li>Grade 9 P.O</li>
            <li>Grade 10 BKD Class President</li>
            <li>Grade 11 Earth and Life Secretary</li>
            <li>Grade 12 Auditor</li>
            <li>Grade 10 Thesis Leader</li>
            <li>Practical Research I & II Leader</li>
            <li>Barkada Kontra Droga P.I.O (2022–2023)</li>
            <li>Barkada Kontra Droga Treasurer (2023–2024)</li>
            <li>Barkada Kontra Droga President (2024–2025)</li>
            <li>Division Federated BKD Treasurer (2024–2025)</li>
            <li>Tibag TV Broadcasting (2022–2023)</li>
            <li>Boys Scout (2016–2019)</li>
            <li>Senior Scout (2023–2025)</li>
            <li>Member of Chess Club (2022–2023)</li>
            <li>Member of Sudoku Club (2023–2025)</li>
            <li>President of BSIT - 1A</li>
            <li>TAU SSITE - P.O</li>

            <li>Implementor of Project KAPWA (Kain, Aruga at Pagdamay para sa Wastong Alaga)</li>
            <li>Implementor of Project SAGIP (Save and Give Immediate Protection)</li>
            <li>Implementor of “MATATAG NA BUKAS” Youth Empowerment Program</li>
            <li>Implementor of Project EAD (Estudyanteng Ayaw sa Droga)</li>

            <li>Leadership Training for New Leaders (2023–2026)</li>
            <li>Participant in Project KADATE (Sto. Cristo Integrated School)</li>
            <li>Participant in Region 3 Learners Convergence (Lubao, Pampanga)</li>
            <li>Participant in Mental Health Seminar (Lubao, Pampanga)
            </li>
         </ul>

          <p className="text-lg leading-7 text-neutral-700">
            This leadership portfolio highlights my implemented projects, seminars, and extensive background in student governance. Each section reflects a strong dedication to excellence, strategic problem-solving, and impactful community initiatives built to empower peers and drive innovation.
          </p>

        </div>

        <div>

          <img
            src="/image/sherwin.jpg"
            alt="Sherwin"
            className="rounded-3xl shadow-2xl h-[750px] w-full object-cover"
          />

        </div>

      </section>

      {/* STORY */}
      <section id="story" className="bg-black text-white py-32">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="/image/Sher.jfif"
            alt="Sher"
            className="rounded-3xl h-[650px] w-full object-cover"
          />

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-stone-400 mb-5">
              My Story
            </p>

            <h2 className="text-6xl font-bold leading-tight mb-8">
              The Story of a Young Leader.
            </h2>

            <p className="text-lg leading-9 text-stone-300 mb-10">
              I started my journey as a simple classroom officer with a desire to serve and make a difference. Through the years, I have grown into a student leader, researcher, project implementor, and youth advocate while maintaining academic excellence. Every experience has strengthened my commitment to transparency, accountability, integrity, and service. Today, as I continue my leadership journey and run for SSITE President, I remain dedicated to representing students and creating positive change in my community.
            </p>

            <Link
              to="/story"
              onClick={playStoryMusic}
              className="inline-block px-8 py-4 bg-white text-black hover:bg-stone-300 transition uppercase tracking-widest text-sm"
            >
              Read Story
            </Link>

          </div>

        </div>

      </section>

      {/* PROJECT CARDS */}
      <section id="projects" className="bg-stone-200 py-32 px-6">

        <div className="mb-20">

          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            LEADERSHIP PORTFOLIO
          </p>

          <h2 className="text-6xl font-bold">
            Leadership Impact & Achievements
          </h2>

          

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Student Government Leadership",
              image:
                "/image/Luanzon.jfif",
              description:
                "Served in numerous student leadership positions from elementary to college, including Public Officer, Treasurer, Secretary, Auditor, Class President, and BSIT-1A President. These experiences strengthened my communication, teamwork, and decision-making skills while representing the interests of fellow students.",
            },
            {
              title: "BKD & Youth Advocacy",
              image:
                "/image/sherwin.jpg",
              description:
                "Became an active leader of Barkada Kontra Droga, serving as P.I.O., Treasurer, President, and Division Federated Treasurer. Through these roles, I promoted drug awareness, youth empowerment, leadership development, and community engagement initiatives.",
            },
            {
              title: "Community Projects & Training",
              image:
                "/image/Lu.jfif",
              description:
                "Implemented impactful projects such as KAPWA, SAGIP, EAD, and MATATAG NA BUKAS. Participated in leadership trainings, Region III Learners Convergence, mental health seminars, scouting activities, and various youth development programs that enhanced my leadership capabilities.",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-300"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-neutral-600 leading-8">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-stone-200 py-32 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
            Contact
          </p>

          <h2 className="text-6xl font-bold mb-8">
            If you have a question you can contact me.
          </h2>

          <p className="text-xl text-neutral-700 leading-9">
            sherwinluanzon24@gmail.com
          </p>

        </div>

      </section>

    </div>
        }
      />

      <Route path="/story" element={<Story />} />
    </Routes>
  )
}