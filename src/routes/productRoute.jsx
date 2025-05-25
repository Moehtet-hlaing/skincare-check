
import CheckProductsPage from "../features/products/pages/CheckProductsPage";
import CheckResultPage from "../features/products/pages/CheckResultPage";
import ProductDetailPage from "../features/products/pages/ProductDetailPage";
import ProductListPage from "../features/products/pages/ProductListPage";

const productRoute = [
    {
        path: '/products',
        element: <ProductListPage />
    },
    {
        path: '/products/:productId',
        element: <ProductDetailPage />
    },
    {
        path: '/products/check-ingredients',
        element: <CheckProductsPage />
    },
    {
        path: '/products/check-result',
        element: <CheckResultPage/>
    }
]

export default productRoute