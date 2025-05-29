
import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";
import NotFound from "../components/NotFound";
import ProductLayout from "../features/products/components/ProductLayout";
import CheckRecordsPage from "../features/products/pages/CheckRecordsPage";

const CheckProductsPage = lazy(() => import("../features/products/pages/CheckProductsPage"));
const CheckResultPage = lazy(() => import("../features/products/pages/CheckResultPage"));
const ProductDetailPage = lazy(() => import("../features/products/pages/ProductDetailPage"));
const ProductListPage = lazy(() => import("../features/products/pages/ProductListPage"));

const productRoute = [
    {
        path: '/products',
        element: <ProductLayout />,
        errorElement: <NotFound />,
        children: [
                {
        index: true,
        element: <Suspense fallback={<div>Loading...</div>}>
            <ProductListPage />
        </Suspense>
    },
    {
        path: ':productId',
        element: <Suspense fallback={<div>Loading...</div>}>
            <ProductDetailPage />
        </Suspense>
    },
    {
        path: 'check-ingredients',
        element: <Suspense fallback={<div>Loading...</div>}>
            <CheckProductsPage />
        </Suspense>
    },
    {
        path: 'check-ingredients/:checkId',
        element: <Suspense fallback={<PageLoading/>}>
            <CheckResultPage />
        </Suspense>
    },
{
    path: 'records',
    element: <Suspense fallback={<div>Loading...</div>}>
        <CheckRecordsPage />
    </Suspense>
}
        ]
    }
]

export default productRoute