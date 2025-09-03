from django.db import models
from Proveedores.models import Proveedor as ProveedorModel


class Producto(models.Model):
    Nombre = models.CharField(max_length=100)
    Descripcion = models.TextField(blank=True, null=True)
    Precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    Stock = models.IntegerField(default=0)
    Proveedor = models.ForeignKey(
        ProveedorModel,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='productos'
    )

    def __str__(self):
        return self.Nombre

    def clean(self):
        from django.core.exceptions import ValidationError
        if self.Precio_unitario <= 0:
            raise ValidationError({'Precio_unitario': 'El precio debe ser mayor a 0.'})