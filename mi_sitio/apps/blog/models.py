from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Publication(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)
    ##En caso de que borre un usuario, se borrarán todas sus publicaciones
    autor = models.ForeignKey(User,on_delete=models.CASCADE)
    #Imagen se guardará por año, mes y día, y puede estar vació en la base y en nuestro archivos
    imagen = models.ImageField(upload_to='imagenes/publicaciones/%Y%m%d/',blank=True,null=True)
    def __str__(self):
        return f'{self.autor} {self.fecha}'
    