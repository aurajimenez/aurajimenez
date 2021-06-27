from django.db import models

class Education(models.Model):
    TYPES = (
        ('CERTIFICATE', 'CERTIFICATE'),
        ('COURSE', 'COURSE'),
        ('INSTITUTION', 'INSTITUTION'),
    )

    type_of_education = models.CharField(choices=TYPES, max_length=50)
    date = models.DateField(auto_now=False, auto_now_add=False)
    name_of_education = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    link = models.URLField(max_length=250)
    description = models.CharField(max_length=500)