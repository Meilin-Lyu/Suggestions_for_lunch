from msilib.schema import ServiceInstall
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SuggestionSerializer
from .models import suggestion

class SuggestionView(viewsets.ModelViewSet):
    serializer_class = SuggestionSerializer
    queryset = suggestion.objects.all()
