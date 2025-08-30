from django.db import models

# Create your models here.
class Cliente(models.Model):
    ClienteID = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=100, null=False)
    Direccion = models.CharField(max_length=200, null=False)
    Telefono = models.CharField(max_length=15, unique=True, null=False) 
    Email = models.EmailField(unique=True, null=False)

    def __str__(self):
        return self.Nombre