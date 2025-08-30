from rest_framework import viewsets
from Clientes.models import Cliente
from Clientes.serializer import ClienteSerializer
# Create your views here.
class ClienteViews(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer