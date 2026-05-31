import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Story() {

const audioRef = useRef(null);

useEffect(() => {
  window.scrollTo({ top: 0 });

  const shouldPlay = sessionStorage.getItem("playStoryMusic");

  if (shouldPlay && audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  }

  return () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    sessionStorage.removeItem("playStoryMusic");
  };
}, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/Story.mp3" type="audio/mpeg" />
      </audio>

      <div className="min-h-screen bg-stone-100 text-neutral-900 font-serif">

        <div className="max-w-4xl mx-auto px-6 py-20">

          <Link
            to="/"
            className="inline-block mb-10 px-6 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition"
          >
            ← Back to Portfolio
          </Link>

          <h1 className="text-6xl font-bold mb-10">
            The TDH (Transparency, Democracy and Human-rights)
          </h1>

          <img
            src="/image/She.jpg"
            alt="Sherwin Luanzon"
            className="w-full h-[500px] object-cover rounded-3xl mb-10"
          />

          <p className="text-xl leading-10 mb-8">
            I have always believed that leadership is not about holding a position—it is about serving people, creating positive change, and standing for what is right. From a young age, I accepted responsibilities that helped me develop my confidence, discipline, and commitment to service.
          </p>

          <p className="text-xl leading-10 mb-8">
            My leadership journey began in Grade 5 when I served as a P.O. and continued in Grade 6 as Treasurer. These early experiences taught me the importance of responsibility and accountability. As I progressed through my academic journey, I continued to take on leadership roles, serving as a P.O. in Grade 9 and becoming the BKD Class President in Grade 10. During the same year, I also served as a Thesis Leader, where I learned how to guide a team, manage challenges, and ensure that we achieved our goals together.
          </p>

          <p className="text-xl leading-10 mb-8">
            My passion for research and academic excellence led me to become the leader of both Practical Research I and Practical Research II. Through these experiences, I strengthened my skills in critical thinking, problem-solving, teamwork, and project management.
          </p>

          <p className="text-xl leading-10 mb-8">
            One of the most meaningful parts of my journey has been my involvement in Barkada Kontra Droga (BKD). I served as Public Information Officer from 2022 to 2023, Treasurer from 2023 to 2024, and President from 2024 to 2025. I was also elected as the Division Federated Barkada Kontra Droga Treasurer for 2024 to 2025.
          </p>

          <p className="text-xl leading-10 mb-8">
            Beyond student government and advocacy, I actively participated in extracurricular organizations. I was part of Tibag TV Broadcasting from 2022 to 2023, a member of the Boys Scouts from 2016 to 2019, and later a Senior Scout from 2023 to 2025.
          </p>

          <p className="text-xl leading-10 mb-8">
            As I entered college, I continued my commitment to leadership by serving as the President of BSIT-1A and as a P.O. of TAU SSITE. Today, I am taking another significant step in my leadership journey as I run for the position of SSITE President.
          </p>

          <p className="text-xl leading-10 mb-8">
            I have also been privileged to implement several community-centered projects, including Project KAPWA, Project SAGIP, MATATAG NA BUKAS, and Project EAD. These projects reflect my dedication to community service, youth development, and social responsibility.
          </p>

          <p className="text-xl leading-10 mb-8">
            Throughout my academic journey, I have participated in various competitions, seminars, and leadership programs. I became a School-Based Chess Finalist, a School-Based Sudoku Finalist, and earned 2nd Place in School-Based Sudoku.
          </p>

          <p className="text-xl leading-10 mb-8">
            Despite balancing numerous responsibilities, I have consistently maintained my academic performance as an honor student. Managing leadership roles, research projects, organizational activities, and academic requirements has not always been easy, but I have remained committed to excellence.
          </p>

          <p className="text-xl leading-10 mb-8">
            My leadership philosophy is rooted in transparency, accountability, consistency, integrity, human rights, and democracy. I believe that leadership is not about personal recognition but about serving others, empowering the youth, and creating opportunities for positive change.
          </p>

          <p className="text-xl leading-10 mb-8">
            My journey continues, and I remain committed to learning, leading, and serving. Every challenge strengthens my character, every responsibility deepens my sense of purpose, and every opportunity to serve inspires me to create a lasting impact.
          </p>

        </div>

      </div>
    </>
  );
}