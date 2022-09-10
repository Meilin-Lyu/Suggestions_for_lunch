from rest_framework import serializers
from .models import suggestion

class SuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = suggestion
        fields = ('title', 'image', 'description', 'location', 'western', 'asian', 'indian')
        read_only_fields = ('time',)
        extra_kwargs = {
            'title': {'required': True},
            'image': {'required': True},
            'description': {'required': True},
            'location': {'required': True},
        }