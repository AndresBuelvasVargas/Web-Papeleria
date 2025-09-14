from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VentaViewSet, DetalleVentaViewSet, InventarioMovimientoViewSet
from rest_framework.documentation import include_docs_urls

router = DefaultRouter()
router.register(r'ventas', VentaViewSet)
router.register(r'detalleventas', DetalleVentaViewSet)
router.register(r'movimientos', InventarioMovimientoViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Productos API')),
]
