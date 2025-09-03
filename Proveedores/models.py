from django.db import models

class Proveedor(models.Model):
    ProveedorID = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=100)
    Contacto = models.CharField(max_length=100, blank=True, null=True)
    Telefono = models.CharField(max_length=15, unique=True, blank=True, null=True)
    Email = models.EmailField(max_length=100, unique=True, blank=True, null=True)

    def __str__(self):
        return self.Nombre
