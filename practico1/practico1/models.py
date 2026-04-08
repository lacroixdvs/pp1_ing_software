from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50)
    precio = models.FloatField()
    cantidad = models.IntegerField()

    def __str__(self):
        return self.nombre