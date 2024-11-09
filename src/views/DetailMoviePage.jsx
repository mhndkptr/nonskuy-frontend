import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function DetailMoviePage() {
  const params = useParams();
  const id = params.id;

  if (!id) return <NotFound />;

  console.log(params.id);

  return (
    <>
      <div className="bg-blue-950 min-h-screen"></div>
    </>
  );
}
