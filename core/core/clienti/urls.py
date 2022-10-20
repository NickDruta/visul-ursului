from django.urls import path
from .views import ClientDetails, ClientList

app_name = 'clienti'

urlpatterns = [
    path('', ClientList.as_view(), name='listcreate'),
    path('<int:pk>/', ClientDetails.as_view(), name='detailcreate'),
]