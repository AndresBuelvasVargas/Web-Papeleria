from Productos.views import ProductoViews
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls# API versioning

router = routers.DefaultRouter()

router.register(r'Productos', ProductoViews, 'Productos')
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Productos API')),
]