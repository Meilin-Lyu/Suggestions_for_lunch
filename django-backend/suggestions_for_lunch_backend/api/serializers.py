from rest_framework import serializers
from .models import suggestion

class SuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = suggestion
        fields = ('id', 'title', 'image', 'description', 'location', 'posttime', 'western', 'asian', 'indian')
        extra_kwargs = {
            'title': {'required': True},
            'image': {'required': True},
            'description': {'required': True},
            'location': {'required': True},
        }