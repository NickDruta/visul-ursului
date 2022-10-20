from rest_framework import serializers
from clienti.models import Client


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'produs', 'mobile', 'cantitate', 'anunta')
        model = Client