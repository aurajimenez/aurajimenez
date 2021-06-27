from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('pk', 'date', 'techonologies', 'description', 'name', 'company', 'link',)