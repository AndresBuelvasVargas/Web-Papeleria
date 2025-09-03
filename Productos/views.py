from rest_framework import viewsets
from Productos.models import Producto
from Productos.serializer import ProductoSerializer

class ProductoViews(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer