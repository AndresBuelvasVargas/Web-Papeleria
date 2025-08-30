from Clientes.views import ClienteViews
from urls import path, include
from rest_framework import routers
# API versioning
router = routers.DefaultRouter()

router.register(r'Clientes', ClienteViews, 'Clientes')
urlpatterns = [
    path('api/v1', include(router.urls)),
]

#GET
#POST
#PUT
#DELETE