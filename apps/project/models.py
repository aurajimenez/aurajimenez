from django.db import models

class Project(models.Model):
    date = models.DateField(auto_now=False, auto_now_add=False)
    techonologies = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    link = models.URLField(max_length=200)
