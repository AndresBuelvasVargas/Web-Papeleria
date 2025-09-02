from rest_framework import viewsets
from Proveedores.models import Proveedor
from Proveedores.serializer import ProveedorSerializer
# Create your views here.
class ProveedorViews(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer