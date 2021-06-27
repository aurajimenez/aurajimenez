from django.db import models

class Hobbies(models.Model):
    TYPES = (
        ('Sports', 'Sports'),
        ('Travel', 'Travel'),
        ('Food', 'Food'),
    )

    description = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    images = models.CharField(max_length=50)
    types = models.CharField(choices=TYPES, max_length=50)
