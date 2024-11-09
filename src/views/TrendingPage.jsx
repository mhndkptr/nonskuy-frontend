import MovieCard from "../components/card/MovieCard";

const trendingMovies = [
  {
    id: 814215,
    title: "Sam Bahadur",
    genres: ["History", "War"],
    overview: "A biography on Sam Manekshaw",
    releaseDate: "2023-12-01",
    poster: "https://image.tmdb.org/t/p/original/uQiG1gSsV18eTFmflsF2NWQMTgR.jpg",
    backdrop: "https://image.tmdb.org/t/p/originalnull",
  },
  {
    id: 695721,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    genres: ["Action & Adventure", "Action & Adventure", "Sci-Fi & Fantasy"],
    overview: "Years before he becomes the tyrannical president of Panem, 18-year-old Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    releaseDate: "2023-11-15",
    poster: "https://image.tmdb.org/t/p/original/jFXj9rh8EoSAHcYTBJYv1ir6X3A.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yj2SVz5I2HuQD84g633W2tijtKi.jpg",
  },
  {
    id: 820525,
    title: "After Everything",
    genres: ["Romance", "Drama"],
    overview: "The sequel to 'After Ever Happy' (2022), which was based on the 2015 novel of same title by Anna Todd, wherein Hardin and Tessa are separated.",
    releaseDate: "2023-09-13",
    poster: "https://image.tmdb.org/t/p/original/d0qw9hiNwhRmfw4yAc44pep6vhz.jpg",
    backdrop: "https://image.tmdb.org/t/p/originalnull",
  },
  {
    id: 860278,
    title: "Stephen Curry: Underrated",
    genres: ["Documentary"],
    overview: "The remarkable coming-of-age story of Stephen Curry—one of the most influential, dynamic, and unexpected players in basketball history—and his rise from an undersized college player to a four-time NBA champion.",
    releaseDate: "2023-07-21",
    poster: "https://image.tmdb.org/t/p/original/d0bxqRDZexPCZUTMhGGEHs4qm0r.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yZ2m1JDKY1GKacAE9qN4jSiMNW7.jpg",
  },
  {
    id: 799258,
    title: "السرب",
    genres: ["Action & Adventure", "War", "Thriller"],
    overview:
      "Based on actual events and the efforts of the Egyptian National Security Authorities against terrorist organizations through the incident of the massacre of 21 Egyptians in Libya and the army’s expanding operations in order to confront these terrorist groups.",
    releaseDate: "2023-06-28",
    poster: "https://image.tmdb.org/t/p/original/yQ3UAsUD9OsG6aA4jIE50dTg7CU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bW3ZAOAM08KeAQkXd4BmM7Typn.jpg",
  },
  {
    id: 946025,
    title: "कटहल",
    genres: ["Drama", "Comedy", "Crime"],
    overview: "When two prized jackfruits disappear from a politician's garden, a spirited cop's investigation takes an unexpected turn as she digs for the truth.",
    releaseDate: "2023-05-19",
    poster: "https://image.tmdb.org/t/p/original/tHlcVOKR3s2gpUljrtBm5MaMqH5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wrdgPLc3AFlG5jyegxSLKdlATF8.jpg",
  },
  {
    id: 1117698,
    title: "Fanfik",
    genres: ["Drama"],
    overview: "Two high school students form an intense connection as they navigate the challenges of discovering and expressing their truest selves.",
    releaseDate: "2023-05-17",
    poster: "https://image.tmdb.org/t/p/original/6qgkVtpVabAzjQaJTgx3Vmqnmyj.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3FGxwPN4HLfqAlF7BqpVPEd41wa.jpg",
  },
  {
    id: 1114590,
    title: "Anna Nicole Smith: You Don't Know Me",
    genres: ["Documentary"],
    overview: "From the heights of her modeling fame to her tragic death, this documentary reveals Anna Nicole Smith through the eyes of the people closest to her.",
    releaseDate: "2023-05-16",
    poster: "https://image.tmdb.org/t/p/original/pGo48u8wJpQVlFV7pRo5a23CxpB.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nIXBaPRix53sq4W2KK8FazrGzc4.jpg",
  },
  {
    id: 1079078,
    title: "Royalteen: Princess Margrethe",
    genres: ["Drama", "Romance"],
    overview:
      "Last year’s prom ended in major drama for Princess Margrethe. She doesn’t dare tell anyone about what happened the night she was hospitalized. Suddenly the Danish royal family plans to visit Norway, and Princess Margrethe will finally get to meet the handsome Danish prince that she's been chatting with for months. As family drama starts piling up for the royal Norwegian family, she finds herself lost between taking care of her family, portraying herself as a strong princess, and being vulnerable in her quest for love.",
    releaseDate: "2023-05-11",
    poster: "https://image.tmdb.org/t/p/original/2gkKRFDiuSvBB57glAMBsdRGeWk.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yELOCXWN7mHpztKppR3ZLWG0CUp.jpg",
  },
  {
    id: 1125575,
    title: "Apple Music Live - Ed Sheeran",
    genres: ["Music"],
    overview: "Apple Music Live returns for a brand-new season of exclusive live concerts with a special performance by Ed Sheeran.",
    releaseDate: "2023-05-10",
    poster: "https://image.tmdb.org/t/p/original/k6oTKYuPa5x9IJrgqGVK0vZpMEi.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dfssPPUbQE4UuabNnJ0Gbsq594f.jpg",
  },
  {
    id: 1112125,
    title: "Hannah Gadsby: Something Special",
    genres: ["Comedy"],
    overview: "A panicky proposal. A novelty wedding cake. A fateful bunny encounter. Hannah Gadsby shares tales of love and marriage in this feel-good comedy special.",
    releaseDate: "2023-05-09",
    poster: "https://image.tmdb.org/t/p/original/A06e8dnCXRm3PmFkQOettDoaaqt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/JiDn9R8cIAbEWKh63QsJCHoS2p.jpg",
  },
  {
    id: 1114905,
    title: "Uno para morir",
    genres: ["Thriller", "Mystery", "Drama", "Horror"],
    overview:
      "Seven strangers wake up in a mansion in the middle of nowhere to discover they are part of a twisted game. They will have 60 minutes to choose one person to die; otherwise, all of them will be murdered. As the clock ticks down, the most lurid secrets will come to light, and they’ll discover they are all connected by a dark past.",
    releaseDate: "2023-05-05",
    poster: "https://image.tmdb.org/t/p/original/yMeKoe3ui4Pad8FUOJwCby3SOWe.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/a20Z41sNEqhBOf6addlSBTTQJkg.jpg",
  },
  {
    id: 1113018,
    title: "Disney Entrelazados Live",
    genres: ["Music"],
    overview:
      'Live the "Disney Intertwined Live" experience! The show includes the original songs "Donde voy" and "Convénceme", covers from the \'90s such as "Keep Living Without Your Love", a selection of songs from the musical "Freaky Friday: A New Musical" and musical hits of the moment such as "Tacones Rojos" and "Vivir Así".',
    releaseDate: "2023-05-05",
    poster: "https://image.tmdb.org/t/p/original/2tGivdnpb4EsZPIj0f5jIpLIYIE.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/n9hILQGfyLS7bLqQapYW5RyVc7A.jpg",
  },
  {
    id: 552688,
    title: "The Mother",
    genres: ["Action & Adventure", "Thriller"],
    overview: "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
    releaseDate: "2023-05-04",
    poster: "https://image.tmdb.org/t/p/original/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/i1eghEBiC0gN4KnwuUGC2fNiX1f.jpg",
  },
  {
    id: 1120959,
    title: "King Charles: The Boy Who Walked Alone",
    genres: ["Documentary"],
    overview: "A look at the new monarch's life from his former friends and girlfriends, schoolmates and his private staff.",
    releaseDate: "2023-05-02",
    poster: "https://image.tmdb.org/t/p/original/5uScnwVfyYuuR8FWmSprQuRAgSW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/u20TeN2ZEHqZ4qI2BxT5FWdnsum.jpg",
  },
  {
    id: 1120585,
    title: "NOISE",
    genres: ["Drama", "Documentary"],
    overview:
      "Set in 2022, NOISE follows a young man as he quickly becomes engulfed by notifications from work, life, and anything else that is downloaded on his phone. Whenever he finds some quiet, the noise follows. It isn't until he finally realizes what brings him peace that the noise is quieted.",
    releaseDate: "2023-05-01",
    poster: "https://image.tmdb.org/t/p/original/mmOSojy4WuqU1CUH41QiN0yPsEQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sweBQMj6PZTk1VWdSAKW70F6L5g.jpg",
  },
  {
    id: 1120438,
    title: "TIME100: The World's Most Influential People",
    genres: ["Documentary", "TV Movie"],
    overview: "Jennifer Coolidge hosts the gala, which features performances by Doja Cat and Lea Michele, honorary tributes from members of this year's list and remarks from TIME CEO Jessica Sibley.",
    releaseDate: "2023-04-30",
    poster: "https://image.tmdb.org/t/p/original/jg0sVs4NFy1Hg1JBmn5SPaYN6z0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bguuQM2CP9BoMv7pSVMlECPHe5T.jpg",
  },
  {
    id: 1102776,
    title: "AKA",
    genres: ["Thriller", "Action & Adventure", "Crime"],
    overview: "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
    releaseDate: "2023-04-28",
    poster: "https://image.tmdb.org/t/p/original/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/zh614Bixv2ePaHK8gzcUpUmcvYv.jpg",
  },
  {
    id: 1094137,
    title: "Charles: In His Own Words",
    genres: ["TV Movie", "Documentary"],
    overview: "A documentary special that provides a rare view into the real Charles behind the headlines… told in his own words.",
    releaseDate: "2023-04-28",
    poster: "https://image.tmdb.org/t/p/original/hdbQ5M8Jj3PFsYW95Lt343Jgata.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s5uI5PRbHplqKyHJNHgyBGu2R1Q.jpg",
  },
  {
    id: 1102935,
    title: "The Matchmaker",
    genres: ["Drama", "Mystery", "Thriller"],
    overview: "When an office worker becomes powerfully infatuated with his beautiful intern, he follows her to a desert resort overrun with bizarre forces.",
    releaseDate: "2023-04-27",
    poster: "https://image.tmdb.org/t/p/original/eIrfXpXF84tiT8U9bOcR2sDemIA.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nWDnVpWGmBp15sdGNtFV1HBpBE4.jpg",
  },
  {
    id: 873256,
    title: "Gorzko, gorzko!",
    genres: ["Romance", "Comedy"],
    overview: "Convinced he can charm any woman, a tenacious flirt sets his sights on a headstrong bride-to-be engaged to the son of an ambitious politician.",
    releaseDate: "2023-04-26",
    poster: "https://image.tmdb.org/t/p/original/kqltY4yywn4ex1Cht6f4lercrW4.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/m0mLjT3TkTXYU2e1XP3wmYDlIml.jpg",
  },
  {
    id: 1119419,
    title: "Wynonna Judd: Between Hell and Hallelujah",
    genres: ["Documentary", "Music"],
    overview: "Follows Wynonna Judd's life as she continues with her next chapter after Naomi Judd's passing.",
    releaseDate: "2023-04-26",
    poster: "https://image.tmdb.org/t/p/original/hQnlNqyieCIxxafRVu2Tqo81Drt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/uQjOKeUAqloLVZKADbQgxf7Y4Na.jpg",
  },
  {
    id: 1093247,
    title: "John Mulaney: Baby J",
    genres: ["Comedy"],
    overview: "A chaotic intervention. An action packed stay in rehab. After a weird couple of years, John Mulaney comes out swinging is his return to the stage.",
    releaseDate: "2023-04-25",
    poster: "https://image.tmdb.org/t/p/original/7OYznY3jHIWK9VQNUN3W7YKVTQd.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/v3IgA4DxD6nMgDJahdLMA046eoh.jpg",
  },
  {
    id: 1111579,
    title: "The Light We Carry: Michelle Obama and Oprah Winfrey",
    genres: ["Documentary"],
    overview: "Michelle Obama delves into the challenges and life lessons that shaped her second bestselling book in an illuminating conversation with Oprah Winfrey.",
    releaseDate: "2023-04-25",
    poster: "https://image.tmdb.org/t/p/original/akmzMZWQasddjK9u8tVQvjEJnUP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/n8IwU4e6LJWLc9K2IHoQ8e4NLsJ.jpg",
  },
  {
    id: 1104004,
    title: "1000% Me: Growing Up Mixed",
    genres: ["Documentary"],
    overview: "W. Kamau Bell tackles the joys and challenges of growing up mixed-race through conversations with kids and families in the San Francisco Bay Area, including his own.",
    releaseDate: "2023-04-22",
    poster: "https://image.tmdb.org/t/p/original/o1Ds13r2n3o99HegitkaBvx2R6S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pU6vY39S0nDz4KZh4uzelyfkBTm.jpg",
  },
];

export default function TrendingPage() {
  return (
    <>
      <div className="min-h-screen bg-blue-950">
        <section className="pb-28 lg:pt-28 pt-24 max-w-screen-xl px-4 mx-auto">
          <h1 className="font-extrabold text-2xl text-left text-white">Trending Movies</h1>

          <div className="w-full mt-8">
            <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 place-items-baseline">
              {trendingMovies.map((movie) => {
                return <MovieCard key={movie.id} data={movie} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
