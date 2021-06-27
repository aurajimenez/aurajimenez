from rest_framework import serializers
from .models import Education

class EducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Education 
        fields = ('pk', 'type_of_education', 'date', 'name_of_education', 'institution', 'name_of_institution', 'description',)