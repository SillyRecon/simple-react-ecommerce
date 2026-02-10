import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    return (
        <div>
            <h1>Search Results</h1>
            {query ? (
                <p>Showing results for: "{query}"</p>
            ) : (
                <p>No search query provided.</p>
            )}
        </div>
    );
}