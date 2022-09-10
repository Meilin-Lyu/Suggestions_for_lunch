from django import forms
from .models import suggestion


class SuggstionForm(forms.ModelForm):
    """Form for the suggestion model"""
    class Meta:
        model = suggestion
        fields = ('title', 'image', 'description', 'location', 'time', 'western', 'asian', 'indian')