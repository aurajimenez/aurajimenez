from rest_framework import serializers
from .models import Hobbies

class HobbiesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hobbies 
        fields = ('pk', 'name', 'types', 'images', 'description',)