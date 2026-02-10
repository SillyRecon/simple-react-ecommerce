import { useParams } from 'react-router-dom';

export default function CategoryPage() {
    const { categorySlug } = useParams();
    return (
        <div>
            <h1>Category: {categorySlug}</h1>
            <p>Products for the "{categorySlug}" category will be displayed here.</p>
        </div>
    );
}