from Proveedores.views import ProveedorViews
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls# API versioning

router = routers.DefaultRouter()

router.register(r'Proveedores', ProveedorViews, 'Proveedores')
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Proveedores API')),
]