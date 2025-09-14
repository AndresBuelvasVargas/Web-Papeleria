from rest_framework import viewsets
from .models import Venta, DetalleVenta, InventarioMovimiento
from .serializer import VentaSerializer, DetalleVentaSerializer, InventarioMovimientoSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer


class DetalleVentaViewSet(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer


class InventarioMovimientoViewSet(viewsets.ModelViewSet):
    queryset = InventarioMovimiento.objects.all()
    serializer_class = InventarioMovimientoSerializer
