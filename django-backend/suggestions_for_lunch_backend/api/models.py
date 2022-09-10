from datetime import datetime
from django.utils import timezone
from django.db import models
import os

from django.conf import settings

MEDIA_ROOT = os.path.join(settings.BASE_DIR, 'media/')
MEDIA_URL = '/media/'

class suggestion(models.Model):
    title = models.CharField(max_length=120)
    image = models.ImageField(upload_to='images/')
    description = models.CharField(max_length=400)
    location = models.CharField(max_length=120)
    time = models.DateTimeField(default=timezone.now)
    #categories
    western = models.BooleanField(default=False)
    asian = models.BooleanField(default=False)
    indian = models.BooleanField(default=False)
    def __str__(self):
        return self.title
