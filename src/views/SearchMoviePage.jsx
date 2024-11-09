import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import MovieCard from "../components/card/MovieCard";

const resultMovies = [
  {
    id: 47369,
    title: "Avenger",
    genres: ["TV Movie", "Action & Adventure", "Thriller"],
    overview:
      "After his own daughter was killed in Panama in 1994, former CIA agent Calvin Dexter became a private 'specialist' in cases which wouldn't reach justice trough the regular legal channels. Two years later he accepts to find Richard 'Ricky' Edmunds for his pa, influential rich businessman Stephen Edmonds. Ricky for a private Canadian war victims charity in Bosnia and went missing. Dexter discovers Ricky was beaten to pulp and drowned for no other crime then helping street boys from the other side by Zoran Zilic and his Serbian paramilitary 'order'. He offers Steven to 'finish the job' as such war criminals don't go to trial. But deputy CIA director Paul Devereaux cares only for a nuclear arms project he wants to use Zilic for. So CIA troubleshooter Frank McBride is ordered to protect him and handle Dexter.",
    releaseDate: "2006-04-09",
    vote: 5.6,
    poster: "https://image.tmdb.org/t/p/original/cEI5aazuAVJ3PcWeNM8gxYiNjmq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mQZ0jXbTfY4RAfPPp3iuH6vtKcX.jpg",
  },
  {
    id: 194798,
    title: "La leggenda di Enea",
    genres: ["History", "Action & Adventure"],
    overview: "Aeneas leads escapees from the Trojan war to new land in Italy, and must deal with new threats to his people.",
    releaseDate: "1962-01-01",
    vote: 5.5,
    poster: "https://image.tmdb.org/t/p/original/pTCn0tRqC13guWjgTtjPGHV3Bw6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sVcHpxD2JKpTgrql2kKOqdWSGwm.jpg",
  },
  {
    id: 623011,
    title: "Avenger Dogs",
    genres: ["Animation"],
    overview:
      "When the universe's highest-flying dogs warp into outer space, Skyfetcher and Spaceslobber get a call from canine headquarters! It seems an unknown force is attacking unsuspecting planets, and it's up to them to root out the source of the trouble!",
    releaseDate: "2019-01-10",
    vote: 4.7,
    poster: "https://image.tmdb.org/t/p/original/9Bm97Coehn5WuchPyQZEmwaWExQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mnKapqN7ce5flIwMw1g2LhlPeoA.jpg",
  },
  {
    id: 15239,
    title: "The Toxic Avenger",
    genres: ["Comedy", "Horror", "Sci-Fi & Fantasy"],
    overview: "Tromaville has a monstrous new hero. The Toxic Avenger is born when mop boy Melvin Junko falls into a vat of toxic waste. Now evildoers will have a lot to lose.",
    releaseDate: "1984-05-01",
    vote: 6.306,
    poster: "https://image.tmdb.org/t/p/original/qRbAr8yilTnXssmk52po7RyqZSH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iU9MO6cRewA6NqMrDTHdqUA6Ubn.jpg",
  },
  {
    id: 74315,
    title: "The Invisible Avenger",
    genres: ["Drama", "Action & Adventure", "Thriller"],
    overview: "Lamont Cranston, aka The Shadow, investigates the murder of a New Orleans bandleader.",
    releaseDate: "1958-12-02",
    vote: 5.7,
    poster: "https://image.tmdb.org/t/p/original/2Nr3mmiVcr3XBG8zkm9K9eLphM1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sn1tPaZK2w7zCvbEn91gMEXx47E.jpg",
  },
  {
    id: 133264,
    title: "The Courageous Avenger",
    genres: ["Western"],
    overview:
      "Kirk Baxter has been sent to investigate murder and robbery involving gold shipments. Identifying a gang member by his bullets, he uses that man's horse to locate and join the gang. He learns the gang is tipped off to the shipments by a mine employee using carrier pigeons. But the next message reveals his true identity and he is made a prisoner.",
    releaseDate: "1935-12-12",
    vote: 5.2,
    poster: "https://image.tmdb.org/t/p/original/i4RXMlXxhprO3KA6KOIFhO6ADt3.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/gbm0aZnuC4c7HaT6dDTi2kYX5KH.jpg",
  },
  {
    id: 133289,
    title: "The Lone Avenger",
    genres: ["Western"],
    overview: "A prominent banker commits suicide. His son thinks otherwise and sets out to prove it.",
    releaseDate: "1933-05-14",
    vote: 0,
    poster: "https://image.tmdb.org/t/p/original/fgzoQuSmll7sxpPEdJQw7IzHL7t.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xMKVs2LysTl79EqxJFCfnjlbd6f.jpg",
  },
  {
    id: 275663,
    title: "Da chu tou",
    genres: ["Action & Adventure", "Drama"],
    overview:
      "When two acrobats are fired for fighting with punks in the audience, they go to live with an aunt who's being pressured to sell her house for a real estate development. The developer's nasty son, Lee Fu, decides to muscle the sale, and soon he's at war with the acrobats, plus their unlikely ally, an American named John who used to be Lee Fu's friend. The acrobats open a kung fu school, the scene of several battles with Lee Fu's thugs. A fight to the death, jail time, auntie's surprise decision, a budding acting career, a possessive girlfriend, a debilitating injury, a friendship that needs recalibrating, and Lee Fu's avenger are all in the mix before the end.",
    releaseDate: "1979-03-15",
    vote: 0,
    poster: "https://image.tmdb.org/t/p/original/414Ka9Q2YuUBjy4noXM8QP9xIlb.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pluw6svD5pmtOZg7GGx6NnpuvBn.jpg",
  },
  {
    id: 87302,
    title: "Alien Space Avenger",
    genres: ["Sci-Fi & Fantasy", "Horror", "Comedy"],
    overview:
      'In 1939 a spaceship carrying four alien escaped prisoners crash-lands on Earth and the aliens take over the bodies of four locals. Fifty years later the aliens find out that an artist has written a comic book called "Space Avenger," which they believe is about them. They go to New York to try to kill the artist.',
    releaseDate: "1989-08-01",
    vote: 4.6,
    poster: "https://image.tmdb.org/t/p/original/wQHY06KYBYSjuf1OukgZWCVEjX1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4XauE71xAksD8cUZkeY0RKzXg2Y.jpg",
  },
  {
    id: 66087,
    title: "I coltelli del vendicatore",
    genres: ["Action & Adventure", "Action & Adventure"],
    overview: "A mysterious knife-throwing viking warrior protects a young peasant woman and her young son from the clutches of a evil regent bent on claiming the title of king and the woman for himself.",
    releaseDate: "1966-05-30",
    vote: 6,
    poster: "https://image.tmdb.org/t/p/original/pptO2dcK30ZuPDRUYCKlHnxZtES.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7jI7Ja5qOi0nw6VFHoQDpdj1hEe.jpg",
  },
  {
    id: 21277,
    title: "アヴェンジャー",
    genres: ["Sci-Fi & Fantasy", "Animation", "Action & Adventure", "Drama"],
    overview:
      "Avenger is an anime series, produced by Bandai Visual, Bee Train and Xebec, and directed by Koichi Mashimo. It is set on post-apocalyptic colonized Mars. The series premiered across Japan between 1 October 2003 and 24 December 2003 on the TV Tokyo network. It was later licensed for North American distribution by Bandai's distributive unit across the region, Bandai Entertainment.",
    vote: 2.5,
    poster: "https://image.tmdb.org/t/p/original/8XIFRGmB552O23GZGTNKAoe9tYo.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/eK8vH4rfdPWcCheEDQzGA81OrgO.jpg",
  },
];

export default function SearchMoviePage() {
  const [queryParameters] = useSearchParams();
  const query = queryParameters.get("query");

  if (!query) return <NotFound />;

  return (
    <>
      <div className="bg-blue-950 min-h-screen">
        <section className="pb-28 lg:pt-28 pt-24 max-w-screen-xl px-4 mx-auto">
          <h1 className="font-medium text-2xl text-left text-white">Search result for &quot;{decodeURIComponent(query)}&quot;</h1>

          <div className="w-full mt-8">
            <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 place-items-baseline">
              {resultMovies.map((movie) => {
                return <MovieCard key={movie.id} data={movie} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
