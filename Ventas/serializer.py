from rest_framework import serializers

from Clientes.serializer import ClienteSerializer
from .models import Venta, DetalleVenta, InventarioMovimiento


class DetalleVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleVenta
        fields = ['detalle_id', 'producto', 'cantidad', 'precio_unitario']

class VentaSerializer(serializers.ModelSerializer):
    detalles = DetalleVentaSerializer(many=True)
    class Meta:
        model = Venta
        fields = ['venta_id', 'cliente', 'total', 'fecha_venta', 'detalles']

    def create(self, validated_data):
        detalles_data = validated_data.pop('detalles', [])
        venta = Venta.objects.create(**validated_data)
        for detalle in detalles_data:
            DetalleVenta.objects.create(venta=venta, **detalle)
        return venta

class InventarioMovimientoSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.CharField(source="producto.Nombre", read_only=True)
    proveedor_nombre = serializers.CharField(source="proveedor.Nombre", read_only=True)

    class Meta:
        model = InventarioMovimiento
        fields = [
            "movimiento_id",
            "tipo_movimiento",
            "cantidad",
            "fecha_movimiento",
            "producto",
            "proveedor",
            "producto_nombre",
            "proveedor_nombre",
        ]