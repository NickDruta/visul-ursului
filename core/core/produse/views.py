from rest_framework import generics
from produse.models import Produs
from .serializers import ProdusSerializer


class ProdusList(generics.ListCreateAPIView):
    queryset = Produs.objects.all()
    serializer_class = ProdusSerializer


class ProdusDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produs.objects.all()
    serializer_class = ProdusSerializer