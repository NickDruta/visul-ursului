from rest_framework import serializers
from produse.models import Produs


class ProdusSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'description', 'image', 'price', 'isAvailable', 'isHot')
        model = Produs