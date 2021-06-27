from django.db import models

class Experience(models.Model):
    ROLE = (
        ('QA', 'QA'),
        ('DEV', 'DEV'),
    )

    role = models.CharField(choices=ROLE, max_length=50)
    description = models.CharField(max_length=50)
    company = models.CharField( max_length=50)
    date = models.DateField(auto_now=False, auto_now_add=False)