from django.db import models

class Client(models.Model):
    produs = models.IntegerField()
    mobile = models.CharField(max_length=80)
    cantitate = models.IntegerField()
    anunta = models.BooleanField(default=False)