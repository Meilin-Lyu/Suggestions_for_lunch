# Generated by Django 4.1.1 on 2022-09-10 18:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_suggestion_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='suggestion',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 10, 18, 42, 14, 37303, tzinfo=datetime.timezone.utc)),
        ),
    ]
