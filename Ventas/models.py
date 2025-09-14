from django.db import models
from Clientes.models import Cliente
from Productos.models import Producto
from Proveedores.models import Proveedor

class Venta(models.Model):
    venta_id = models.AutoField(primary_key=True)
    fecha_venta = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"Venta {self.venta_id} - Cliente: {self.cliente.Nombre if self.cliente else 'N/A'}"


class DetalleVenta(models.Model):
    detalle_id = models.AutoField(primary_key=True)
    venta = models.ForeignKey(Venta, on_delete=models.CASCADE, related_name="detalles")
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)

    def subtotal(self):
        return self.cantidad * self.precio_unitario

    def __str__(self):
        return f"Detalle {self.detalle_id} - Venta {self.venta.venta_id}"


class InventarioMovimiento(models.Model):
    MOVIMIENTO_CHOICES = (
        ('entrada', 'Entrada'),
        ('salida', 'Salida'),
    )

    movimiento_id = models.AutoField(primary_key=True)
    fecha_movimiento = models.DateTimeField(auto_now_add=True)
    tipo_movimiento = models.CharField(max_length=10, choices=MOVIMIENTO_CHOICES)
    cantidad = models.PositiveIntegerField()
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    proveedor = models.ForeignKey(Proveedor, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.tipo_movimiento} - {self.producto.nombre} ({self.cantidad})"