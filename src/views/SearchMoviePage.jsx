import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function SearchMoviePage() {
  const [queryParameters] = useSearchParams();
  const query = queryParameters.get("query");

  if (!query) return <NotFound />;

  return (
    <>
      <div>SearchMoviePage</div>
    </>
  );
}
