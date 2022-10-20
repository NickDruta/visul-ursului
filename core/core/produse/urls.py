from django.urls import path
from .views import ProdusList, ProdusDetails

app_name = 'produse'

urlpatterns = [
    path('<int:pk>/', ProdusDetails.as_view(), name='detailcreate'),
    path('', ProdusList.as_view(), name='listcreate'),
]