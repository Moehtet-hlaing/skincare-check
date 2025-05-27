
import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";

const CheckProductsPage = lazy(() => import("../features/products/pages/CheckProductsPage"));
const CheckResultPage = lazy(() => import("../features/products/pages/CheckResultPage"));
const ProductDetailPage = lazy(() => import("../features/products/pages/ProductDetailPage"));
const ProductListPage = lazy(() => import("../features/products/pages/ProductListPage"));

const productRoute = [
    {
        path: '/products',
        element: <Suspense fallback={<div>Loading...</div>}>
            <ProductListPage />
        </Suspense>
    },
    {
        path: '/products/:productId',
        element: <Suspense fallback={<div>Loading...</div>}>
            <ProductDetailPage />
        </Suspense>
    },
    {
        path: '/products/check-ingredients',
        element: <Suspense fallback={<div>Loading...</div>}>
            <CheckProductsPage />
        </Suspense>
    },
    {
        path: '/products/check-ingredients/:checkId',
        element: <Suspense fallback={<PageLoading/>}>
            <CheckResultPage />
        </Suspense>
    }
]

export default productRoute