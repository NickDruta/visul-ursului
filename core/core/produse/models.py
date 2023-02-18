from fileinput import filename
from webbrowser import get
from django.db import models

class Weight(models.Model):
    weight = models.IntegerField(default=0)

    def __str__(self):
        return str(self.weight)

class Produs(models.Model):
    name = models.CharField(max_length=80)
    description = models.CharField(max_length=2000)
    image = models.ImageField(upload_to='./media')
    price = models.IntegerField()
    isAvailable = models.BooleanField(default=False)
    isHot = models.BooleanField(default=False)